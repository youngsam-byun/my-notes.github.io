import com.fasterxml.jackson.databind.ObjectMapper
import org.apache.kafka.common.security.auth.AuthenticateCallbackHandler
import org.apache.kafka.common.security.oauthbearer.OAuthBearerToken
import org.apache.kafka.common.security.oauthbearer.OAuthBearerTokenCallback
import java.io.FileInputStream
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.security.KeyStore
import javax.net.ssl.SSLContext
import javax.net.ssl.TrustManagerFactory
import javax.security.auth.callback.Callback

// 1. 카프카 표준 토큰 인터페이스 구현체
class LocalOAuthBearerToken(
    private val jwtToken: String,
    private val principal: String,
    private val lifetimeMillis: Long
) : OAuthBearerToken {
    override fun value(): String = jwtToken
    override fun scope(): Set<String> = emptySet()
    override fun lifetimeMs(): Long = lifetimeMillis
    override fun principalName(): String = principal
    override fun startTimeMs(): Long = System.currentTimeMillis()
}

// 2. 격리된 JKS 전용 커스텀 핸들러
class LocalJksOAuth2Handler : AuthenticateCallbackHandler {
    private lateinit var httpClient: HttpClient
    private lateinit var tokenUrl: String
    private lateinit var clientId: String
    private lateinit var clientSecret: String
    private val objectMapper = ObjectMapper()

    override fun configure(configs: Map<String, *>, saslMechanism: String) {
        // 카프카 브로커용으로 팩토리에 설정해 둔 JKS 경로를 그대로 재활용
        val truststorePath = configs["ssl.truststore.location"] as String
        val truststorePass = configs["ssl.truststore.password"] as String

        this.tokenUrl = configs["custom.oauth.token.endpoint.url"] as String
        this.clientId = configs["custom.oauth.client.id"] as String
        this.clientSecret = configs["custom.oauth.client.secret"] as String

        // JVM 전역을 오염시키지 않고 이 HTTP 클라이언트에만 JKS 바인딩
        val keyStore = KeyStore.getInstance("JKS")
        FileInputStream(truststorePath).use { it.load(keyStore, truststorePass.toCharArray()) }
        val tmf = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm()).apply { init(keyStore) }
        val sslContext = SSLContext.getInstance("TLS").apply { init(null, tmf.trustManagers, null) }

        this.httpClient = HttpClient.newBuilder().sslContext(sslContext).build()
    }

    override fun handle(callbacks: Array<Callback>) {
        for (callback in callbacks) {
            if (callback is OAuthBearerTokenCallback) {
                val request = HttpRequest.newBuilder()
                    .uri(URI.create(tokenUrl))
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .POST(HttpRequest.BodyPublishers.ofString("grant_type=client_credentials&client_id=$clientId&client_secret=$clientSecret"))
                    .build()

                val response = httpClient.send(request, HttpResponse.BodyHandlers.ofString())
                
                val rootNode = objectMapper.readTree(response.body())
                val accessToken = rootNode.get("access_token").asText()
                val expiresInSeconds = rootNode.get("expires_in")?.asLong() ?: 300L
                val lifetime = System.currentTimeMillis() + (expiresInSeconds * 1000)

                // 토큰을 주입하면 이후 주기에 맞춰 카프카 엔진이 이 handle()을 자동 재호출하여 갱신합니다.
                callback.token(LocalOAuthBearerToken(accessToken, clientId, lifetime))
            }
        }
    }

    override fun close() {}
}

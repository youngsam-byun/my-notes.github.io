import org.apache.kafka.common.security.auth.AuthenticateCallbackHandler
import org.apache.kafka.common.security.oauthbearer.OAuthBearerTokenCallback
import org.apache.kafka.common.security.oauthbearer.internals.secured.AccessTokenBuilder
import java.io.FileInputStream
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.security.KeyStore
import javax.net.ssl.SSLContext
import javax.net.ssl.TrustManagerFactory
import javax.security.auth.callback.Callback
import com.fasterxml.jackson.databind.ObjectMapper // 또는 기존 프로젝트의 JSON 파서

class LocalJksOAuth2Handler : AuthenticateCallbackHandler {
    private lateinit var httpClient: HttpClient
    private lateinit var tokenUrl: String
    private lateinit var clientId: String
    private lateinit var clientSecret: String
    private val objectMapper = ObjectMapper()

    override fun configure(configs: Map<String, *>, saslMechanism: String) {
        // 1. 팩토리 Map 설정에서 경로와 패스워드를 다이렉트로 가로챔
        val truststorePath = configs["ssl.truststore.location"] as String
        val truststorePass = configs["ssl.truststore.password"] as String

        // JAAS 설정 파싱 대신 편의상 Map에 넘긴 custom property 사용 가능
        this.tokenUrl = configs["oauth.token.endpoint.url"] as String
        this.clientId = configs["oauth.client.id"] as String
        this.clientSecret = configs["oauth.client.secret"] as String

        // 2. JVM 전역 오염 없는 독립 KeyStore 빌드
        val keyStore = KeyStore.getInstance("JKS")
        FileInputStream(truststorePath).use { it.load(keyStore, truststorePass.toCharArray()) }
        val tmf = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm()).apply { init(keyStore) }
        val sslContext = SSLContext.getInstance("TLS").apply { init(null, tmf.trustManagers, null) }

        // 3. 이 JKS 전용 순수 Java HTTP 클라이언트 생성
        this.httpClient = HttpClient.newBuilder().sslContext(sslContext).build()
    }

    override fun handle(callbacks: Array<Callback>) {
        for (callback in callbacks) {
            if (callback is OAuthBearerTokenCallback) {
                // 4. 카프카 내부 갱신 주기 스케줄러가 호출할 때마다 격리된 클라이언트로 HTTPS 요청
                val request = HttpRequest.newBuilder()
                    .uri(URI.create(tokenUrl))
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .POST(HttpRequest.BodyPublishers.ofString("grant_type=client_credentials&client_id=$clientId&client_secret=$clientSecret"))
                    .build()

                val response = httpClient.send(request, HttpResponse.BodyHandlers.ofString())
                val node = objectMapper.readTree(response.body())
                val accessToken = node.get("access_token").asText()
                
                // 카프카가 인지할 수 있는 토큰 객체로 바인딩 (자동 만료/갱신 스케줄링 작동)
                callback.token(AccessTokenBuilder.fromTokenString(accessToken))
            }
        }
    }
    override fun close() {}
}

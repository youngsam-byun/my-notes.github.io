방법 2: WebClient / RestTemplate을 이용한 토큰 선발급 구조 (추천)
Kafka 내부 핸들러(OAuthBearerLoginCallbackHandler)에게 IdP 통신을 전적으로 맡기지 않고, Kotlin Spring 아키텍처 상에서 WebClient를 통해 토큰을 먼저 안전하게 발급받은 뒤, 팩토리 설정에 넣어주는 방식입니다. javax.를 쓰지 않고 특정 WebClient에만 JKS를 먹이는 것은 매우 쉽기 때문에 멀티모듈 환경에서 가장 안전합니다.

1. JKS가 적용된 OAuth2용 WebClient Bean 생성
Kotlin
@Bean
fun oauth2WebClient(): WebClient {
    val keyStore = KeyStore.getInstance("JKS")
    FileInputStream("/path/to/truststore.jks").use { fis ->
        keyStore.load(fis, "password".toCharArray())
    }

    val tmf = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm())
    tmf.init(keyStore)

    val sslContext = SslContextBuilder.forClient()
        .trustManager(tmf)
        .build()

    val httpClient = HttpClient.create()
        .secure { sslContextSpec -> sslContextSpec.sslContext(sslContext) }

    return WebClient.builder()
        .clientConnector(ReactorClientHttpConnector(httpClient))
        .baseUrl("https://your-idp-server.com")
        .build()
}
2. 토큰을 동적으로 주입하는 LoginCallbackHandler 구현
외부에서 발급받은 토큰을 Kafka SASL 인증 시점에 넣어주는 간단한 핸들러를 적용합니다. 이 방식을 쓰면 Kafka 내부 핸들러가 직접 SSL 통신을 하지 않으므로 SSL 에러가 원천 차단됩니다.

Kotlin
import org.apache.kafka.common.security.auth.AuthenticateCallbackHandler
import org.apache.kafka.common.security.oauthbearer.OAuthBearerTokenCallback
import javax.security.auth.callback.Callback
import javax.security.auth.callback.UnsupportedCallbackException

class PreFetchedTokenCallbackHandler(
    private val tokenProvider: () -> String // 토큰을 반환하는 함수 수신
) : AuthenticateCallbackHandler {

    override fun configure(configs: Map<String, *>, saslMechanism: String) {}

    override fun handle(callbacks: Array<Callback>) {
        for (callback in callbacks) {
            if (callback is OAuthBearerTokenCallback) {
                val accessToken = tokenProvider() // WebClient로 받아온 토큰
                callback.token(CustomOAuthBearerToken(accessToken))
            } else {
                throw UnsupportedCallbackException(callback)
            }
        }
    }
    override fun close() {}
}
참고: CustomOAuthBearerToken은 Kafka의 OAuthBearerToken 인터페이스를 구현한 단순 데이터 클래스입니다.

3. 팩토리 설정에 결합
Kotlin
@Bean
fun consumerFactory(oauth2WebClient: WebClient): ConsumerFactory<String, Any> {
    val props = HashMap<String, Any>()
    props[CommonClientConfigs.BOOTSTRAP_SERVERS_CONFIG] = "your-kafka-broker:9093"
    props[CommonClientConfigs.SECURITY_PROTOCOL_CONFIG] = "SASL_SSL"
    
    // 브로커 통신용 SSL
    props[SslConfigs.SSL_TRUSTSTORE_LOCATION_CONFIG] = "/path/to/truststore.jks"
    props[SslConfigs.SSL_TRUSTSTORE_PASSWORD_CONFIG] = "password"
    
    props[SaslConfigs.SASL_MECHANISM] = "OAUTHBEARER"
    props[SaslConfigs.SASL_JAAS_CONFIG] = "org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;"
    
    // 선발급 핸들러 주입
    val tokenProvider = { 
        // oauth2WebClient를 사용해 동기/비동기로 토큰을 가져오는 로직 작성
        oauth2WebClient.post().uri("/oauth/token").retrieve().bodyToMono(String::class.java).block()!!
    }
    
    val factory = DefaultKafkaConsumerFactory<String, Any>(props)
    // 리스너가 기동될 때 커스텀 핸들러가 동작하도록 설정
    factory.setListeners(listOf(/* ... */)) 
    
    return factory
}

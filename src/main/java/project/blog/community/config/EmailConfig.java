package project.blog.community.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

public class EmailConfig {

    @Value("${spring.mail.host}")
    private String host;
    @Value("${spring.mail.port}")
    private int port;
    @Value("${spring.mail.username}")
    private String username;
    @Value("${spring.mail.password}")
    private String password;
    @Value("${spring.mail.properties.smtp.auth}")
    private boolean auth;
    @Value("${spring.mail.properties.smtp.starttls.enable}")
    private boolean starttlsEnable;
    @Value("${spring.mail.properties.smtp.starttls.required}")
    private boolean starttlsRequired;
    @Value("${spring.mail.properties.smtp.ssl.enable}")
    private boolean sslEnable;
    @Bean
    public JavaMailSender mailSender() {//JAVA MAILSENDER 인터페이스를 구현한 객체를 빈으로 등록하기 위함.

        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();//JavaMailSender 의 구현체를 생성하고
        mailSender.setHost(host);// 속성을 넣기 시작합니다. 이메일 전송에 사용할 SMTP 서버 호스트를 설정
        mailSender.setPort(port);// 587로 포트를 지정
        mailSender.setUsername(username);//구글계정을 넣습니다.
        mailSender.setPassword(password);//구글 앱 비밀번호를 넣습니다.

        Properties javaMailProperties = new Properties();//JavaMail의 속성을 설정하기 위해 Properties 객체를 생성
        javaMailProperties.put("mail.smtp.ssl.enable", "true");
        javaMailProperties.put("mail.smtp.starttls.enable", "true");//STARTTLS(TLS를 시작하는 명령)를 사용하여 암호화된 통신을 활성화
        javaMailProperties.put("mail.transport.protocol", "smtp");//프로토콜로 smtp 사용
        javaMailProperties.put("mail.smtp.auth", auth);//smtp 서버에 인증이 필요
        javaMailProperties.put("mail.smtp.starttls.required", starttlsRequired);
        javaMailProperties.put("mail.debug", "true");//디버깅 정보 출력


        mailSender.setJavaMailProperties(javaMailProperties);//mailSender에 우리가 만든 properties 넣고

        return mailSender;//빈으로 등록한다.
    }
}
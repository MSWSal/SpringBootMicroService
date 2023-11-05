package com.example.notification;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;

@Service
@RequiredArgsConstructor
public class NotificationService {

    public final JavaMailSender mailSender;

    public String sendMail(String email) throws MessagingException, UnsupportedEncodingException {

        sendEmail(email, "Payment Completed", PaymentEmailTemplate.PaymentEmailTemplate());

        return "Email Sent Success";
    }

    public void sendEmail(String recipientEmail, String subject, String content) throws MessagingException, UnsupportedEncodingException {

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("medease.lk@gmail.com", "Sri Tel Support");
        helper.setTo(recipientEmail);
        helper.setSubject(subject);
        helper.setText(content,true);
        mailSender.send(message);

    }
}

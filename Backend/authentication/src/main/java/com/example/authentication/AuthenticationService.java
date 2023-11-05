package com.example.authentication;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    public AuthenticationDTO authenticate(String mobile, String password) {

        if(Objects.equals(mobile, "0771234567") && Objects.equals(password, "12345")){
            return AuthenticationDTO.builder()
                    .status("POSTPAID SUCCESS")
                    .build();
        }
        else if (Objects.equals(mobile, "0721234567") && Objects.equals(password, "12345")){
            return AuthenticationDTO.builder()
                    .status("PREPAID SUCCESS")
                    .build();
        }

        else {
            return AuthenticationDTO.builder()
                    .status("ERROR")
                    .build();
        }

    }
}

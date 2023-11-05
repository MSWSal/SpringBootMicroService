package com.example.authentication;

import lombok.RequiredArgsConstructor;
import org.springframework.cloud.client.loadbalancer.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/authentication")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/{mobile}/{password}")
    public AuthenticationDTO authenticate(@PathVariable String mobile, @PathVariable String password){
        return authenticationService.authenticate(mobile, password);
    }

}

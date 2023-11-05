package com.example.payment;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping("/{accno}/{email}/{service}/{amount}")
    public ResponseEntity<String> pay(@PathVariable String accno, @PathVariable String email, @PathVariable String service, @PathVariable String amount){
        return ResponseEntity.ok(paymentService.pay(accno, email, service, amount));
    }

}

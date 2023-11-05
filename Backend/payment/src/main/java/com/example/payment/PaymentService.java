package com.example.payment;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {


    public String pay(String accno, String email, String service, String amount) {

        return "You have successfully paid "+amount+" for "+service+" to account number "+accno;

    }
}

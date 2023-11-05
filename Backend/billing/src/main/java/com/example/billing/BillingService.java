package com.example.billing;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BillingService {
    public List<BillingDTO> getBills() {

        List<BillingDTO> billingDTOS = new ArrayList<>();
        var bil1 = BillingDTO.builder()
                .title("Bill 01")
                .totalAmount("Rs. 1000.00")
                .date("2023-11-31")
                .build();

        billingDTOS.add(bil1);

        var bil2 = BillingDTO.builder()
                .title("Bill 02")
                .totalAmount("Rs. 5000.00")
                .date("2023-12-15")
                .build();

        billingDTOS.add(bil2);

        var bil3 = BillingDTO.builder()
                .title("Bill 03")
                .totalAmount("Rs. 1500.00")
                .date("2023-10-31")
                .build();

        billingDTOS.add(bil3);

        var bil4 = BillingDTO.builder()
                .title("Bill 03")
                .totalAmount("Rs. 1450.00")
                .date("2023-12-15")
                .build();

        billingDTOS.add(bil4);


        return billingDTOS;

    }
}

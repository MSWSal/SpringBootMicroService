package com.example.billing;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/billing")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class BillingController {

    private final BillingService billingService;
    @GetMapping
    public List<BillingDTO> getBills(){
        return billingService.getBills();
    }

}

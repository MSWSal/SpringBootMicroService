package com.example.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServiceService {


    public String toggle(Integer state) {

        if(state == 1) {
            return "Service Enabled";
        }
        else {
            return "Service Disabled";
        }
    }

    public List<ServiceDTO> getServices() {

        List<ServiceDTO> serviceDTOS = new ArrayList<>();
        var service1 = ServiceDTO.builder()
                .title("Voice Package")
                .totalAmount("Rs. 1000.00")
                .build();

        serviceDTOS.add(service1);

        var service2 = ServiceDTO.builder()
                .title("Data Package")
                .totalAmount("Rs. 1500.00")
                .build();

        serviceDTOS.add(service2);

        var service3 = ServiceDTO.builder()
                .title("SMS Package")
                .totalAmount("Rs. 500.00")
                .build();

        serviceDTOS.add(service3);

        var service4 = ServiceDTO.builder()
                .title("Roaming Package")
                .totalAmount("Rs. 2000.00")
                .build();

        serviceDTOS.add(service4);

        return serviceDTOS;
    }
}

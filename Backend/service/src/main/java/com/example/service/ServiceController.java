package com.example.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/service")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class ServiceController {

    private final ServiceService serviceService;

    @PostMapping("/{state}")
    public ResponseEntity<String> toggle(@PathVariable Integer state){
        return ResponseEntity.ok(serviceService.toggle(state));
    }

    @GetMapping
    public List<ServiceDTO> getServices(){
        return serviceService.getServices();
    }


}

package com.sahan.school;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/schools")
@RequiredArgsConstructor
public class SchoolController {

    private final SchoolService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(
            @RequestBody School school
    ){
        service.saveSchool(school);
    }

    @GetMapping
    public ResponseEntity<List<School>> findAll(){
        return ResponseEntity.ok(service.findAllSchools());
    }

    @GetMapping("/with-students/{school-id}")
    public ResponseEntity<FullSchoolResponse> findAll(
            @PathVariable("school-id") Integer schoolID
    ){
        return ResponseEntity.ok(service.findSchoolsWithStudents(schoolID));
    }




}

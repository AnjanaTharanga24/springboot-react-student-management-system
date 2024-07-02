package com.example.backend.controller;

import com.example.backend.controller.request.StudentRequest;
import com.example.backend.controller.response.StudentResponse;
import com.example.backend.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class StudentController {

    private StudentService studentService;
    
    @PostMapping("/students")
    public StudentResponse registerStudent(@RequestBody StudentRequest studentRequest){
        return studentService.registerStudent(studentRequest);
    }
}

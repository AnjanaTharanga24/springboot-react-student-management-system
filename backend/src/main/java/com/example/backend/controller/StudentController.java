package com.example.backend.controller;

import com.example.backend.controller.request.StudentRequest;
import com.example.backend.controller.response.StudentResponse;
import com.example.backend.exception.StudentNotFoundException;
import com.example.backend.model.Student;
import com.example.backend.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class StudentController {

    private StudentService studentService;
    
    @PostMapping("/students")
    public StudentResponse registerStudent(@RequestBody StudentRequest studentRequest){
        return studentService.registerStudent(studentRequest);
    }

    @GetMapping("/students/{student-id}")
    public StudentResponse studentFindById(@PathVariable("student-id")Long studentId) throws StudentNotFoundException {
        return studentService.studentFindById(studentId);
    }

    @GetMapping("/students")
    public List<Student> findAllStudents(){
        return studentService.getAllStudents();
    }

    @DeleteMapping("students/{student-id}")
    public String studentDeleteById(@PathVariable("student-id") Long studentId){
        return studentService.studentDeleteById(studentId);
    }

    @PutMapping("/students/{student-id}")
    public StudentResponse updateStudent(@PathVariable("student-id")Long studentId , @RequestBody StudentRequest studentRequest){
        return studentService.updateStudent(studentId,studentRequest);
    }
}

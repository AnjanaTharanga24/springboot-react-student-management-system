package com.example.backend.controller;

import com.example.backend.controller.request.StudentCourseEnrollRequest;
import com.example.backend.controller.request.StudentLoginRequest;
import com.example.backend.controller.request.StudentRegisterRequest;
import com.example.backend.controller.response.CourseResponse;
import com.example.backend.controller.response.LoginResponse;
import com.example.backend.controller.response.StudentEnrollResponse;
import com.example.backend.controller.response.StudentResponse;
import com.example.backend.exception.NotFoundException;
import com.example.backend.exception.StudentExistsException;
import com.example.backend.exception.StudentNotFoundException;
import com.example.backend.model.Course;
import com.example.backend.model.Student;
import com.example.backend.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("http://localhost:3001")
public class StudentController {

    private StudentService studentService;
    
    @PostMapping("/register")
    public StudentResponse registerStudent(@RequestBody StudentRegisterRequest studentRequest) throws StudentExistsException {
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
    public StudentResponse updateStudent(@PathVariable("student-id")Long studentId , @RequestBody StudentRegisterRequest studentRequest){
        return studentService.updateStudent(studentId,studentRequest);
    }

    @PostMapping("/login")
    public LoginResponse loginStudent(@RequestBody StudentLoginRequest loginRequest) throws StudentNotFoundException {
        LoginResponse response = studentService.loginStudent(loginRequest);
        System.out.println("Login Response: " + response);
        return response;
    }

    @PostMapping("/students/{student-id}/courses")
    public List<StudentEnrollResponse> enrollCourses(@PathVariable("student-id")Long studentId , @RequestBody List<StudentCourseEnrollRequest> courseEnrollRequest) throws StudentNotFoundException , NotFoundException {
        return studentService.studentEnrollCourses(studentId,courseEnrollRequest);
    }

    @GetMapping("/students/{student-id}/courses")
    public List<CourseResponse> getEnrolledCoursesByStudentId(@PathVariable("student-id") Long studentId){
        return studentService.getEnrolledCourses(studentId);
    }

}

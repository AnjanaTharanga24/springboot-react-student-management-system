package com.example.backend.service;

import com.example.backend.controller.StudentController;
import com.example.backend.controller.request.StudentLoginRequest;
import com.example.backend.controller.request.StudentRegisterRequest;
import com.example.backend.controller.response.LoginResponse;
import com.example.backend.controller.response.StudentResponse;
import com.example.backend.exception.StudentExistsException;
import com.example.backend.exception.StudentNotFoundException;
import com.example.backend.model.Student;

import java.util.List;

public interface StudentService {

    StudentResponse registerStudent(StudentRegisterRequest studentRequest) throws StudentExistsException;
    StudentResponse studentFindById(Long studentId) throws StudentNotFoundException;

    List<Student> getAllStudents();

    String studentDeleteById(Long studentId);

    StudentResponse updateStudent(Long studentId , StudentRegisterRequest studentRequest);

    LoginResponse loginStudent(StudentLoginRequest loginRequest) throws StudentNotFoundException;
}

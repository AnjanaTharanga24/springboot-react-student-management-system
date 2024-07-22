package com.example.backend.service;

import com.example.backend.controller.request.StudentRegisterRequest;
import com.example.backend.controller.response.StudentResponse;
import com.example.backend.exception.StudentNotFoundException;
import com.example.backend.model.Student;

import java.util.List;

public interface StudentService {

    StudentResponse registerStudent(StudentRegisterRequest studentRequest);
    StudentResponse studentFindById(Long studentId) throws StudentNotFoundException;

    List<Student> getAllStudents();

    String studentDeleteById(Long studentId);

    StudentResponse updateStudent(Long studentId , StudentRegisterRequest studentRequest);
}

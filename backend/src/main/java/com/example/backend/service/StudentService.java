package com.example.backend.service;

import com.example.backend.controller.request.StudentRequest;
import com.example.backend.controller.response.StudentResponse;
import com.example.backend.exception.StudentNotFoundException;
import com.example.backend.model.Student;
import com.example.backend.repository.StudentRepository;

import java.util.List;

public interface StudentService {

    StudentResponse registerStudent(StudentRequest studentRequest);
    StudentResponse studentFindById(Long studentId) throws StudentNotFoundException;

    List<Student> getAllStudents();

    String studentDeleteById(Long studentId);

    StudentResponse updateStudent(Long studentId , StudentRequest studentRequest);
}

package com.example.backend.service;

import com.example.backend.controller.request.StudentRequest;
import com.example.backend.controller.response.StudentResponse;
import com.example.backend.repository.StudentRepository;

public interface StudentService {

    StudentResponse registerStudent(StudentRequest studentRequest);
}

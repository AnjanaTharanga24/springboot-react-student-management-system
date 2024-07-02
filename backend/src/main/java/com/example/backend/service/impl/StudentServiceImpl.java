package com.example.backend.service.impl;

import com.example.backend.controller.request.StudentRequest;
import com.example.backend.controller.response.StudentResponse;
import com.example.backend.model.Student;
import com.example.backend.repository.StudentRepository;
import com.example.backend.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;

    @Override
    public StudentResponse registerStudent(StudentRequest studentRequest) {

        Student student = new Student();
        student.setName(studentRequest.getName());
        student.setAge(studentRequest.getAge());
        student.setGender(studentRequest.getGender());
        student.setAddress(studentRequest.getAddress());
        student.setMobile(studentRequest.getMobile());
        student.setEmail(studentRequest.getEmail());
        student.setDob(studentRequest.getDob());

        studentRepository.save(student);

        return StudentResponse.builder()
                .id(student.getId())
                .name(student.getName())
                .age(student.getAge())
                .gender(student.getGender())
                .address(student.getAddress())
                .mobile(student.getMobile())
                .email(student.getEmail())
                .email(student.getEmail())
                .build();
    }
}

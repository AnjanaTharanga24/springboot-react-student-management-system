package com.example.backend.service.impl;

import com.example.backend.controller.request.StudentRequest;
import com.example.backend.controller.response.StudentResponse;
import com.example.backend.exception.StudentNotFoundException;
import com.example.backend.model.Student;
import com.example.backend.repository.StudentRepository;
import com.example.backend.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
                .dob(student.getDob())
                .build();
    }

    @Override
    public StudentResponse studentFindById(Long studentId) throws StudentNotFoundException {

        Optional<Student> studentOptional = studentRepository.findById(studentId);

        if(!studentOptional.isPresent()){
            throw new StudentNotFoundException("Student not found with id "+studentId);
        }
        Student foundStudent = studentOptional.get();

        return StudentResponse.builder()
                .id(foundStudent.getId())
                .name(foundStudent.getName())
                .age(foundStudent.getAge())
                .gender(foundStudent.getGender())
                .address(foundStudent.getAddress())
                .mobile(foundStudent.getMobile())
                .email(foundStudent.getEmail())
                .dob(foundStudent.getDob())
                .build();
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public String studentDeleteById(Long studentId) {
        studentRepository.deleteById(studentId);
        return "student deleted success with id "+studentId;
    }

    @Override
    public StudentResponse updateStudent(Long studentId , StudentRequest studentRequest) {
        Optional<Student> studentOptional = studentRepository.findById(studentId);

        if(!studentOptional.isPresent()){
            return null;
        }
        Student currentStudent = studentOptional.get();

        currentStudent.setName(studentRequest.getName());
        currentStudent.setAge(studentRequest.getAge());
        currentStudent.setGender(studentRequest.getGender());
        currentStudent.setAddress(studentRequest.getAddress());
        currentStudent.setMobile(studentRequest.getMobile());
        currentStudent.setEmail(studentRequest.getEmail());
        currentStudent.setDob(studentRequest.getDob());

        studentRepository.save(currentStudent);

        return StudentResponse.builder()
                .id(currentStudent.getId())
                .name(currentStudent.getName())
                .age(currentStudent.getAge())
                .gender(currentStudent.getGender())
                .address(currentStudent.getAddress())
                .mobile(currentStudent.getMobile())
                .email(currentStudent.getEmail())
                .dob(currentStudent.getDob())
                .build();
    }
}

package com.example.backend.service.impl;

import com.example.backend.controller.request.StudentLoginRequest;
import com.example.backend.controller.request.StudentRegisterRequest;
import com.example.backend.controller.response.LoginResponse;
import com.example.backend.controller.response.StudentResponse;
import com.example.backend.exception.StudentExistsException;
import com.example.backend.exception.StudentNotFoundException;
import com.example.backend.model.Student;
import com.example.backend.repository.StudentRepository;
import com.example.backend.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;
    private PasswordEncoder passwordEncoder;
    @Override
    public StudentResponse registerStudent(StudentRegisterRequest studentRequest)throws StudentExistsException {

        if(studentRepository.existsByUsername(studentRequest.getUsername())){
            throw new  StudentExistsException("username already exists");
        }

        Student student = new Student();
        student.setName(studentRequest.getName());
        student.setUsername(studentRequest.getUsername());
        student.setAge(studentRequest.getAge());
        student.setGender(studentRequest.getGender());
        student.setAddress(studentRequest.getAddress());
        student.setMobile(studentRequest.getMobile());
        student.setEmail(studentRequest.getEmail());
        student.setPassword(passwordEncoder.encode(studentRequest.getPassword()));
        student.setDob(studentRequest.getDob());

        studentRepository.save(student);

        return StudentResponse.builder()
                .id(student.getId())
                .name(student.getName())
                .username(student.getUsername())
                .age(student.getAge())
                .gender(student.getGender())
                .address(student.getAddress())
                .mobile(student.getMobile())
                .email(student.getEmail())
                .password(student.getPassword())
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
                .password(foundStudent.getPassword())
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
    public StudentResponse updateStudent(Long studentId , StudentRegisterRequest studentRequest) {
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
        currentStudent.setPassword(studentRequest.getPassword());
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

    @Override
    public LoginResponse loginStudent(StudentLoginRequest loginRequest) throws StudentNotFoundException {
        Student student = studentRepository.findByUsername(loginRequest.getUsername()).orElseThrow(()->new StudentNotFoundException("student not found with user name : " +loginRequest.getUsername()));

        if (passwordEncoder.matches(loginRequest.getPassword(), student.getPassword())){
            return new LoginResponse("Login successful");
        }else {
            throw new StudentNotFoundException("Invalid credential");
        }
    }
}

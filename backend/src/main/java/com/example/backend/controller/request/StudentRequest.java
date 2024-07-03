package com.example.backend.controller.request;

import com.example.backend.model.Gender;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentRequest {

    private String name;
    private Integer age;
    private Gender gender;
    private String address;
    private String mobile;
    private String email;
    private String password;
    private LocalDate dob;
}

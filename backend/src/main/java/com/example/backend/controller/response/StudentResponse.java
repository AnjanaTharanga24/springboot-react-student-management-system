package com.example.backend.controller.response;

import com.example.backend.model.Gender;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StudentResponse {

    private Long id;
    private String name;
    private Integer age;
    private Gender gender;
    private String address;
    private String mobile;
    private String email;
    private String password;
    private LocalDate dob;
}

package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@ToString(exclude = "courses")
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String username;
    private Integer age;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private String address;
    private String mobile;
    private String email;
    private String password;
    private LocalDate dob;

    @OneToMany(mappedBy = "student")
    @JsonIgnore
    private List<Course> courses;


}

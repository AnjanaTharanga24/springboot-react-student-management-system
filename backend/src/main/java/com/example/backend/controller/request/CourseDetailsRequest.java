package com.example.backend.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseDetailsRequest {

    private String title;
    private String instructor;
    private String type;
    private String duration;
    private LocalDate date;

}

package com.example.backend.controller.response;

import com.example.backend.model.Student;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CourseResponse {
    private Long id;
    private String title;
    private String instructor;
    private String type;
    private String duration;
    private LocalDate date;
    private Long studentId;
}

package com.example.backend.controller.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StudentEnrollResponse {

    private String title;
    private String instructor;
    private String type;
    private String duration;
    private LocalDate date;
}

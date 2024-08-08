package com.example.backend.service.impl;

import com.example.backend.repository.CourseRepository;
import com.example.backend.service.CourseService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CourseServiceImpl implements CourseService {

    private CourseRepository courseRepository;
    @Override
    public Integer getEnrolledStudentCountOfCourse(String courseTitle) {
        return null;
    }
}

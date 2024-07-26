package com.example.backend.service;

import com.example.backend.controller.request.CourseDetailsRequest;
import com.example.backend.model.CourseDetails;

import java.util.List;

public interface CourseDetailsService {

    CourseDetails createCourse(CourseDetailsRequest courseDetailsRequest);

    List<CourseDetails> getAllCourses();
}

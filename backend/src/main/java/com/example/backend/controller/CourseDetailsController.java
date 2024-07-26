package com.example.backend.controller;

import com.example.backend.controller.request.CourseDetailsRequest;
import com.example.backend.model.CourseDetails;
import com.example.backend.service.CourseDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class CourseDetailsController {

    private CourseDetailsService courseDetailsService;

    @PostMapping("/courses")
    public CourseDetails createCourses(@RequestBody CourseDetailsRequest courseDetailsRequest){
        return courseDetailsService.createCourse(courseDetailsRequest);
    }
}

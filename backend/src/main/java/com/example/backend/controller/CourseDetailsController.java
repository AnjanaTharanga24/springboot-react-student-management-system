package com.example.backend.controller;

import com.example.backend.controller.request.CourseDetailsRequest;
import com.example.backend.model.CourseDetails;
import com.example.backend.service.CourseDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("http://localhost:3000")
public class CourseDetailsController {

    private CourseDetailsService courseDetailsService;

    @PostMapping("/courses")
    public CourseDetails createCourses(@RequestBody CourseDetailsRequest courseDetailsRequest){
        return courseDetailsService.createCourse(courseDetailsRequest);
    }

    @GetMapping("/courses")
    public List<CourseDetails> getAllCourses(){
        return courseDetailsService.getAllCourses();
    }
}

package com.example.backend.service.impl;

import com.example.backend.controller.request.CourseDetailsRequest;
import com.example.backend.model.CourseDetails;
import com.example.backend.repository.CourseDetailsRepository;
import com.example.backend.service.CourseDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CourseDetailsServiceImpl implements CourseDetailsService {

    private CourseDetailsRepository courseDetailsRepository;
    @Override
    public CourseDetails createCourse(CourseDetailsRequest courseDetailsRequest) {
        CourseDetails courseDetails = new CourseDetails();
        courseDetails.setTitle(courseDetailsRequest.getTitle());
        courseDetails.setInstructor(courseDetailsRequest.getInstructor());
        courseDetails.setType(courseDetailsRequest.getType());
        courseDetails.setDuration(courseDetailsRequest.getDuration());
        courseDetails.setDate(courseDetailsRequest.getDate());

        return courseDetailsRepository.save(courseDetails);
    }
}

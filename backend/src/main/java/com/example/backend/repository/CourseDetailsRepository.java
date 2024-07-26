package com.example.backend.repository;

import com.example.backend.model.CourseDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseDetailsRepository extends JpaRepository<CourseDetails , Long> {

    CourseDetails findByTitle(String title);
}

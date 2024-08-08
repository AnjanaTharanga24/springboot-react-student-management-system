package com.example.backend.repository;

import com.example.backend.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course , Long> {

    List<Course> findByStudentId(Long id);
    @Query("SELECT COUNT (c.title) FROM Course c WHERE c.title = :courseTitle")
    Integer calculateEnrolledStudentCountOfCourses(String courseTitle);
}

//select count(c.title)
// from course c
// where c.title = :courseTitle

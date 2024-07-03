package com.example.backend.exception;

public class StudentNotFoundException extends Exception{
    public StudentNotFoundException(String message){
        super(message);
    }
}

package com.example.backend.exception;

public class StudentExistsException extends Exception{
    public StudentExistsException(String message){
        super(message);
    }
}

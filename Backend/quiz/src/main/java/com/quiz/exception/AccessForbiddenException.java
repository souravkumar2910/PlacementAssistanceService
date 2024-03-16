package com.quiz.exception;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;



@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "Incorrect/Expired JWT Token")

public class AccessForbiddenException extends Exception {



private static final long serialVersionUID = 8761194255281477049L;



public AccessForbiddenException(String message) {
super(message);
}



}


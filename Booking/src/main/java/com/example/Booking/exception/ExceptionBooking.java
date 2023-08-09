package com.example.Booking.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ExceptionBooking extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public ExceptionBooking(String message) {
		super(message);
	}
}


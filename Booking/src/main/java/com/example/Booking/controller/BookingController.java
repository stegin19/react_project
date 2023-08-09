package com.example.Booking.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Booking.exception.ExceptionBooking;
import com.example.Booking.model.BookingModel;
import com.example.Booking.repository.BookingRepository;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v2")
public class BookingController {
    

    @Autowired
	private BookingRepository bookingRepository;

    @GetMapping("/bookings")
	public List<BookingModel> getAllBook(){
		return bookingRepository.findAll();
	}		
	

    @PostMapping("/bookings")
	public BookingModel createBooking(@RequestBody BookingModel booking) {
		return bookingRepository.save(booking);
	}

    @DeleteMapping("/bookings/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteBooking(@PathVariable Long id){
		BookingModel booking = bookingRepository.findById(id)
				.orElseThrow(() -> new ExceptionBooking("Employee not exist with id :" + id));
		
		bookingRepository.delete(booking);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}

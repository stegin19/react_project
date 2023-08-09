import axios from "axios";

const BOOKING_API="http://localhost:8080/api/v2";

const BookingService={
    getBooking(){
        return axios.get(`${BOOKING_API}/bookings`);
    },
    createBooking(booking){
        return axios.post(`${BOOKING_API}/bookings`,booking);
    },
    getBookingById(bookingId){
        return axios.get(`${BOOKING_API}/bookings/${bookingId}`);
    },
    deleteBooking(bookingId){
        return axios.delete(`${BOOKING_API}/bookings/${bookingId}`);
    },
};

export default BookingService;
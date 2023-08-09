import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingService from "../Service/BookingSerive";

const Booking2Component = () =>{
    const navigate=useNavigate();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        BookingService.getBooking().then((res) => {
          setBookings(res.data);
        });
      }, []);

    const home =()=>{
        navigate(`/bookings`)
    }
    const bookStatus=()=>{
            document.getElementById("but1").innerHTML="Booked";
    }

    return(
        <div>
      <h2 className="text-center">Bus Confirmation</h2>
      <div className="row">
        {/* <button className="btn btn-primary" onClick={addBooking}>
          Book Now
        </button> */}
      </div>
      <br />
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Bus Name</th>
              <th> Source Destination</th>
              <th> Arrival Destination</th>
              <th> Traveling Time</th>
              <th> Fare</th>
              <th> Booking Status</th>
            </tr>
          </thead>
          <tbody>

              {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>Akatsuki Express</td>
                <td>{booking.sd}</td>
                <td>{booking.ad}</td>
                <td>7:00 - 6:00</td>
                <td>$1000</td>
                <td><button
                 onClick ={bookStatus}
                 className="btn btn-info"
                >
                    </button> </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={home} className="btn btn-info">Home</button>
      </div>
    </div>
  );

}
export default Booking2Component;
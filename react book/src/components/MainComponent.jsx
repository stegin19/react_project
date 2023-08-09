import React, {useState, useEffect } from "react";
import BookingService from "../Service/BookingSerive";
import { useNavigate } from "react-router-dom";

const MainComponent = () =>{
    const [bookings,setBookings]= useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        BookingService.getBooking().then((res)=>{
            setBookings(res.data);
        });
    },[]);


    const deleteBooking =(id)=>{
        BookingService.deleteBooking(id).then((res)=>{
            setBookings(bookings.filter((booking)=>booking.id !==id));
        });
    };

      
    const viewBooking=(id)=>{
        navigate(`/view-booking/${id}`);
    }

    const addBooking=(id)=>{
        navigate(`/add-booking/__add`);
    }


    return(
        <div>
      <h2 className="text-center">Bus Reservation</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addBooking}>
          Book Now
        </button>
      </div>
      <br />
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th> Phone Number</th>
              <th> Gender</th>
              <th> Source Destination</th>
              <th> Arrival Destination</th>
              <th> Traveling Time</th>
              <th> Options</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td> {booking.name} </td>
                <td> {booking.phone}</td>
                <td> {booking.gender}</td>
                <td> {booking.sd}</td>
                <td> {booking.ad}</td>
                <td> {booking.tt}</td>
                <td>
                  {/* <button
                    onClick={() => editEmployee(employee.id)}
                    
                  >
                    Update
                  </button> */}
                  <button
                    style={{ marginLeft: '10px' }}
                    onClick={() => deleteBooking(booking.id)}
                    
                  >
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: '10px' }}
                    onClick={() => viewBooking(booking.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MainComponent;
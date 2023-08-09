import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingService from "../Service/BookingSerive";

const ViewComponent=()=>{
    const{id}=useParams();
    // const navigate=useNavigate();

    const[booking,setBooking]=useState({});

    useEffect(()=>{
        BookingService.getBookingById(id).then((res)=>{
            setBooking(res.data);
        });
    },[id]);

    return (
        <div>
          <br />
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">View Booking</h3>
            <div className="card-body">
              <div className="row">
                <label> Name </label>
                <div>{booking.name}</div>
              </div>
              <div className="row">
                <label>Phone Number </label>
                <div>{booking.phone}</div>
              </div>
              <div className="row">
                <label>Gender </label>
                <div>{booking.gender}</div>
              </div>
              <div className="row">
                <label>Source Destination </label>
                <div>{booking.sd}</div>
              </div>
              <div className="row">
                <label>Arrival Destination  </label>
                <div>{booking.ad}</div>
              </div>
              <div className="row">
                <label>Time Taken</label>
                <div>{booking.tt}</div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ViewComponent
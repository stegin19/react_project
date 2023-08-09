import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookingService from "../Service/BookingSerive";

const CreateBooking =() =>{
    const{id}=useParams();
    const navigate=useNavigate();

    const[name, setName]=useState('');
    const[phone, setPhone]=useState('');
    const[gender, setGender]=useState('');
    const[sd, setSd]=useState('');
    const[ad, setAd]=useState('');

    // const[user, setUser] = useState([
    //   name : ""
    // ])
 


    useEffect(()=>{
        if(id !=='__add'){
            BookingService.getBookingById(id).then((res)=>{
                let booking=res.data;
                setName(booking.name);
                setPhone(booking.phone);
                setGender(booking.gender);
                setSd(booking.sd);
                setAd(booking.ad);
            });
        }
    },[id]);


    const saveBooking =(e) =>{
      e.preventDefault();
        // let booking={name,phone,gender,sd,ad};

            navigate(`/booking2`);
        

       
    };

    const cancel=()=>{
        navigate('/bookings');
    };

    const onInputChange = (e) => {
      setName(...n]ame, [e.target.value])
    }

    return (
        <div>
          <br />
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3>Booking Information</h3>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Name: </label>
                      <input
                  
                        placeholder="Name"
                        name="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => onInputChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number: </label>
                      <input
                   
                        placeholder="Phone number"
                        name="phone"
                        className="form-control"
                        value={phone}
                        // onChange={changeLastNameHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label> Gender</label>
                      <input
                        placeholder="Gender"
                        name="gender"
                        className="form-control"
                        value={gender}
                        // onChange={changeEmailHandler}
                      />
                    </div>
    
                    <div className="form-group">
                      <label> Source destination</label>
                      <input
                        placeholder="Source destination"
                        name="sd"
                        className="form-control"
                        value={sd}
                        // onChange={changeEmailHandler}
                      />
                    </div>
    
                    <div className="form-group">
                      <label> Arrivval Destination</label>
                      <input
                        placeholder=" Arrivval Destination"
                        name="ad"
                        className="form-control"
                        value={ad}
                        // onChange={changeEmailHandler}
                      />
                    </div>
    
    
                    <button className="btn btn-success" onClick={saveBooking}>
                      Save
                    </button>
                    
                    <button
                      className="btn btn-danger"
                      onClick={cancel}
                      style={{ marginLeft: '10px' }}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

};

export default CreateBooking;
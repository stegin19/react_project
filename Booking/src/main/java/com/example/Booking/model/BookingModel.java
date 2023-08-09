package com.example.Booking.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "BookingTable")
public class BookingModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @Column(name="name")
    private String name;
    @Column(name="phone number")
    private String phone;
    @Column(name="Gender")
    private String gender;
    @Column(name="Source Destination")
    private String sd;
    @Column(name="Arrival Destination")
    private String ad;

    
    public BookingModel() {
    }


    public BookingModel(long id, String name, String phone, String gender, String sd, String ad) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.gender = gender;
        this.sd = sd;
        this.ad = ad;
    }


    public long getId() {
        return id;
    }


    public void setId(long id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }


    public String getPhone() {
        return phone;
    }


    public void setPhone(String phone) {
        this.phone = phone;
    }


    public String getGender() {
        return gender;
    }


    public void setGender(String gender) {
        this.gender = gender;
    }


    public String getSd() {
        return sd;
    }


    public void setSd(String sd) {
        this.sd = sd;
    }


    public String getAd() {
        return ad;
    }


    public void setAd(String ad) {
        this.ad = ad;
    }


    @Override
    public String toString() {
        return "BookingModel [id=" + id + ", name=" + name + ", phone=" + phone + ", gender=" + gender + ", sd=" + sd
                + ", ad=" + ad + "]";
    }


    
   
}

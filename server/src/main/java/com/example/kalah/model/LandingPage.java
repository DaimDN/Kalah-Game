package com.example.kalah.model;

public class LandingPage {
    public String message;

    public LandingPage(String message){
        this.message = message;
    }

    @Override
    public String toString() {
        return  "message='" + message ;
    }
}

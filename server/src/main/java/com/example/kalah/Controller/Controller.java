package com.example.kalah.Controller;


import com.example.kalah.model.LandingPage;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping(path = "/", produces = "application/json")
    public static LandingPage LandingPage(){
        LandingPage landingPage = new LandingPage("Welcome to Kalah Game");
        return landingPage;
    }


}

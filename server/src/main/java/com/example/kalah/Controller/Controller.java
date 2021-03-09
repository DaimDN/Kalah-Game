package com.example.kalah.Controller;


import com.example.kalah.model.LandingPage;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {


    @GetMapping(path = "/", produces = "application/json")
    public static LandingPage LandingPage(){
        LandingPage landingPage = new LandingPage("This is the backed");
        return landingPage;
    }
}

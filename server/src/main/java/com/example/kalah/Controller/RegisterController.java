package com.example.kalah.Controller;

import com.example.kalah.user.Repository.UserRespository;
import com.example.kalah.user.Repository.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;



@Controller
@RestController
public class RegisterController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRespository userRespository;



    @CrossOrigin("http://localhost:5000")
    @ResponseStatus(HttpStatus.OK)
    @PostMapping(path = "/register", consumes = "application/json", produces = "application/json")
    user USER(@RequestBody user USER){
        USER.setPassword(passwordEncoder.encode(USER.getPassword()));
        userRespository.save(USER);
        return USER;
    }


}

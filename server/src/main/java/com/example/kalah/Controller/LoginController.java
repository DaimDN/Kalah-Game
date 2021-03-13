package com.example.kalah.Controller;

import com.example.kalah.user.Repository.UserRespository;
import com.example.kalah.user.Repository.user;
import com.example.kalah.user.UserAuth.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
public class LoginController {

    @Autowired
    private UserRespository userRespository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @CrossOrigin("http://localhost:5000")
    @PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
     String login(@RequestBody Login login){
        String email = login.getEmail();
        user founduser = userRespository.findByEmail(email);
        if(founduser != null){
            boolean check = passwordEncoder.matches(login.getPassword(), founduser.getPassword());
            if(check){
                return "true";
            }
            else {
                return "wrong password";
            }
        }else{
            return "User doesnt exist";
        }
    }






}
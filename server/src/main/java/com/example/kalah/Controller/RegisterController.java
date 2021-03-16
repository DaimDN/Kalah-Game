package com.example.kalah.Controller;

import com.example.kalah.Exceptions.AuthExceptions;
import com.example.kalah.user.Repository.UserRespository;
import com.example.kalah.user.Repository.user;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.management.Query;
import java.util.ArrayList;



@Controller
@RestController
public class RegisterController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRespository userRespository;



    @CrossOrigin("http://localhost:3000")
    @PostMapping(path = "/register", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> USER(@RequestBody user USER){
       user founduser =  userRespository.findByEmail(USER.getEmail());


        if(founduser == null){
            USER.setPassword(passwordEncoder.encode(USER.getPassword()));
            userRespository.save(USER);

        }else{
            return ResponseEntity.ok(new AuthExceptions("User Already Exists"));
        }


        return ResponseEntity.ok(USER);

    }


}
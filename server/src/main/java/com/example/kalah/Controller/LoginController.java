package com.example.kalah.Controller;

import com.example.kalah.Exceptions.AuthExceptions;
import com.example.kalah.user.Repository.UserRespository;
import com.example.kalah.user.Repository.user;
import com.example.kalah.user.UserAuth.Login;
import com.example.kalah.util.JsonWebToken;
import com.example.kalah.util.Token;
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


    @CrossOrigin("http://localhost:3000")
    @PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
    Object login(@RequestBody Login login){
        String email = login.getEmail();
        user founduser = userRespository.findByEmail(email);
        if(founduser != null){
            boolean check = passwordEncoder.matches(login.getPassword(), founduser.getPassword());
            if(check){
                JsonWebToken jwt = new JsonWebToken();
                String Token = jwt.generateToken(founduser);
                Token token = new Token(Token);
                return token;
            }
            else {
                AuthExceptions authExceptions = new AuthExceptions("Credentails Invalid");
                return authExceptions;
            }
        }else{
            AuthExceptions authExceptions = new AuthExceptions("Invalid User");
            return authExceptions;
        }
    }






}
package com.example.kalah.Controller;


import com.example.kalah.Exceptions.AuthExceptions;
import com.example.kalah.user.Repository.UserRespository;
import com.example.kalah.user.Repository.user;
import com.example.kalah.util.JsonWebToken;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RestController

public class UserApiController {



    @Autowired
    private JsonWebToken jsonWebToken;

    @Autowired
    private UserRespository userRespository;

    @RequestMapping(value = "/authUser", method = RequestMethod.GET)
    public ResponseEntity<?> UserFinderandAuth(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws Exception {

        final String requestTokenHeader = httpServletRequest.getHeader("Auth");


        String email = null;
        String FetchedToken = null;

        if (requestTokenHeader != null ) {
            FetchedToken = requestTokenHeader;
            try {
                email  = jsonWebToken.getEmailFromToken(FetchedToken);
                user founduser = userRespository.findByEmail(email);

                user UserDetails = new user(founduser.getId(),founduser.getFirstname(),founduser.getLastname(), founduser.getEmail());
                return ResponseEntity.ok(UserDetails);
            } catch (IllegalArgumentException e) {
                return ResponseEntity.ok(new AuthExceptions("Unable to Access Token"));
            } catch (ExpiredJwtException e) {
                return ResponseEntity.ok(new AuthExceptions(("Token Expired")));
            }
        } else {
            return ResponseEntity.ok(new AuthExceptions("Error found"));
        }



    }







    }

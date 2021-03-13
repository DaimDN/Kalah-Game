package com.example.kalah.Exceptions;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
public class AuthExceptions {
    private String Error;

    public AuthExceptions(String Error){
        this.Error = Error;
    }


}

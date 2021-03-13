package com.example.kalah.user.UserAuth;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor

public class Register {
    private String firstname;
    private String lastname;
    private String email;
    private String password;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Register register = (Register) o;
        return Objects.equals(firstname, register.firstname) && Objects.equals(lastname, register.lastname) && Objects.equals(email, register.email) && Objects.equals(password, register.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(firstname, lastname, email, password);
    }
}

package com.example.kalah.Strategy;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "KalahSet")


public class Strategy implements Serializable {
    @Id
    private String GameId;


}

package com.example.kalah.Strategy;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.List;


@Document(collection = "KalahBoard")
@Setter
@Getter
public class Strategy implements Serializable {

    @Id
    private String GameId;
    private List<KalahHouse> KalahHouse;
    private Turn playerTurn;

    @JsonIgnore
    private int currentHousePosition;

    public Strategy(String GameId, Integer pitStones) {
        this (pitStones);
        this.id = id;
    }



}

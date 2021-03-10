package com.example.kalah.Strategy;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static com.example.kalah.Strategy.GameDefault.*;


@Document(collection = "KalahBoard")
@Setter
@Getter
public class Strategy implements Serializable {
    @Id
    private String gameId;
    private List<KalahHouse> KalahHouse;
    private PlayerTurns Player;

    @JsonIgnore
    private int currentHousePosition;


    public Strategy(){
        this (defaultSeed);
    }

    public Strategy(String gameId, Integer pitStones) {
        this (pitStones);
        this.gameId = gameId;
    }

    public Strategy(int Seeds) {
        KalahHouse FHPA = new KalahHouse(firstHousePlayerA, Seeds);
        KalahHouse SHPA = new KalahHouse(secondHousePlayerA, Seeds);
        KalahHouse THPA = new KalahHouse(thirdHousePlayerA, Seeds);
        KalahHouse FRHPA = new KalahHouse(forthHousePlayerA, Seeds);
        KalahHouse FFHPA = new KalahHouse(fifthHousePlayerA, Seeds);
        KalahHouse SIXTHHPA = new KalahHouse(sixthHousePlayerA, Seeds);
        KalahHouse RightHouse = new KalahHouse(RightKalahIndex);
        KalahHouse FHPB = new KalahHouse(firstHousePlayerB, Seeds);
        KalahHouse SHPB = new KalahHouse(secondHousePlayerB, Seeds);
        KalahHouse THPB = new KalahHouse(thirdHousePlayerB, Seeds);
        KalahHouse FRHPB = new KalahHouse(forthHousePlayerB, Seeds);
        KalahHouse FFHPB = new KalahHouse(fifthHousePlayerB, Seeds);
        KalahHouse SIXTHHPB = new KalahHouse(sixthHousePlayerB, Seeds);
        KalahHouse LeftHouse = new KalahHouse(LeftKalahIndex);
        this.KalahHouse = Arrays.asList(FHPA, SHPA, THPA, FRHPA, FFHPA, SIXTHHPA, RightHouse, FHPB, SHPB, THPB, FRHPB, FFHPB, SIXTHHPB, LeftHouse);

    }
    public KalahHouse getHouse(Integer HouseIndex) {
            return this.KalahHouse.get(HouseIndex-1);
    }

    @Override
    public String toString() {
        return "Board{" +
                ", pits=" + KalahHouse +
                ", playerTurn=" + Player +
                '}';
    }

}

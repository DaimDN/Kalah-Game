package com.example.kalah.Strategy;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data


public class KalahHouse implements Serializable {

    private Integer GameId;
    private Integer Seeds;

    public void EmptyHouse (){
        this.Seeds = 0;
    }

    public void FillSeeds () {
        this.Seeds++;
    }

    @JsonIgnore
    public Boolean EmptySeededHouse (){
        return this.Seeds == 0;
    }

    public void fillSeed (Integer Seed){
        this.Seeds+= Seed;
    }

    @Override
    public String toString() {
        String Id = GameId.toString();
        String Seeded = Seeds.toString();

        return Id +
                ":" +
               Seeded ;
    }
}

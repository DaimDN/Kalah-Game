package com.example.kalah.Strategy;


import lombok.NoArgsConstructor;


public enum PlayerTurns {
    PlayerOne ("A"), Playertwo ("B");

    private String whoseTurn;

    PlayerTurns(String a) {
    }

    public String getWhoseTurn() {
        return whoseTurn;
    }

    public void setWhoseTurn(String whoseTurn) {
        this.whoseTurn = whoseTurn;
    }

    PlayerTurns(){
        this.whoseTurn = whoseTurn;
    }

    @Override
    public String toString() {
        return whoseTurn;
    }


}

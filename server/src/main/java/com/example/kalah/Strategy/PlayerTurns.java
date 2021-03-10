package com.example.kalah.Strategy;

public enum PlayerTurns {
    PlayerA ("A"), PlayerB ("B");

    private String whoseTurn;

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

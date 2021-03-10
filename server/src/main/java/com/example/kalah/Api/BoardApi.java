package com.example.kalah.Api;


import com.example.kalah.Strategy.Strategy;

public interface BoardApi {
    Strategy newBoard(int Seeds);
}
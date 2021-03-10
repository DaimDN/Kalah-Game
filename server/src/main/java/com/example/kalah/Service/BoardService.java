package com.example.kalah.Service;


import com.example.kalah.Api.BoardApi;
import com.example.kalah.DAO.BoardRepository;
import com.example.kalah.Strategy.Strategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardService implements BoardApi {

    @Autowired
    private BoardRepository boardRepository;

    @Override
    public Strategy newBoard(int Seeds) {
        Strategy strategy = new Strategy(Seeds);
        boardRepository.save(strategy);
        return strategy;
    }
}

package com.example.kalah.Service;


import com.example.kalah.Api.BoardApi;
import com.example.kalah.DAO.BoardRepository;
import com.example.kalah.Strategy.Strategy;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    @Cacheable(value = "kalahGames", key = "#id" , unless = "#result  == null")
    public Strategy loadGame (String id)  {
        Optional<Strategy> Found = boardRepository.findById(id);

        if (!Found.isPresent())
            throw new ResourceNotFoundException("Board not found!");

        return Found.get();
    }

    @CachePut(value = "kalahGames", key = "#kalahaGame.id")
    public Strategy updateGame (Strategy board){
        board = boardRepository.save(board);
        return board;
    }
}

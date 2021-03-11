package com.example.kalah.DAO;

import com.example.kalah.Api.BoardApi;
import com.example.kalah.Strategy.Strategy;
import org.springframework.data.mongodb.repository.DeleteQuery;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BoardRepository extends MongoRepository<Strategy, String>  {

    List<Strategy> findAll();

    @DeleteQuery
    void deleteByGameId(String gameId);



}

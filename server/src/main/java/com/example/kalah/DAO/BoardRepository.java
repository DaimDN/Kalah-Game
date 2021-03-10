package com.example.kalah.DAO;

import com.example.kalah.Api.BoardApi;
import com.example.kalah.Strategy.Strategy;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BoardRepository extends MongoRepository<Strategy, String>  {

}

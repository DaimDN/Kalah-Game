package com.example.kalah.Controller;


import com.example.kalah.Service.BoardService;
import com.example.kalah.Service.SeedingService;
import com.example.kalah.Strategy.GameDefault;
import com.example.kalah.Strategy.Strategy;
import com.example.kalah.model.LandingPage;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.ArrayList;

@RestController
public class Controller {

    private Integer Seeds = 4;
    //Adding Services
    @Autowired
    private BoardService boardService;

    @Autowired
    private SeedingService seedingService;

    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping(path = "/", produces = "application/json")
    public static LandingPage LandingPage(){
        LandingPage landingPage = new LandingPage("Welcome to Kalah Game");
        return landingPage;
    }


    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    @PostMapping(value = "delete/{gameId}")
    @ApiOperation( value = "", produces = "application/json", response = Strategy.class, httpMethod = "POST")
    public ResponseEntity<String> DeleteBoard(
            @ApiParam(value = "", required = true)
            @PathVariable(value = "gameId") String gameId) throws Exception {
        boardService.deleteChoosenGame(gameId);
        String AfterDeletion = gameId.toString();
        return ResponseEntity.ok(AfterDeletion);
    }



    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/default")
    public String landing() {
        return "*";
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("{BoardId}")
    @ApiOperation(value = "",
            produces = "Application/JSON", response = Strategy.class, httpMethod = "GET")
    public ResponseEntity<Strategy> BoardStatus(
            @ApiParam(value = "",
                    required = true)
            @PathVariable(value = "BoardId") String gameId) throws Exception {

        return ResponseEntity.ok(boardService.loadGame(gameId));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/all", produces = "application/json")
    public ArrayList<Strategy> getAllGames(){
      return (ArrayList<Strategy>) boardService.findAllGames();

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    @ApiOperation( value = "", produces = "application/json", response = Strategy.class, httpMethod = "POST")
    public ResponseEntity<Strategy> CreateBoard() throws Exception {

        Strategy board = boardService.newBoard(Seeds);
        boardService.updateGame(board);
        return ResponseEntity.ok(board);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseStatus(HttpStatus.OK)
    @PutMapping(value = "{BoardId}/houses/{houseId}")
    @ApiOperation(value = "",
            produces = "Application/JSON", response = Strategy.class, httpMethod = "PUT")
    public ResponseEntity<Strategy> PopulateBoard(
            @ApiParam(value = "", required = true)
            @PathVariable(value = "BoardId") String gameId,
            @PathVariable(value = "houseId") Integer houseId) throws Exception {

        Strategy board = boardService.loadGame(gameId);

        board = seedingService.seed(board, houseId);
        boardService.updateGame(board);
        return ResponseEntity.ok(board);
    }

}

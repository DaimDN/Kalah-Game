package com.example.kalah.Service;

import com.example.kalah.Api.SeedingApi;
import com.example.kalah.Strategy.GameDefault;
import com.example.kalah.Strategy.KalahHouse;
import com.example.kalah.Strategy.PlayerTurns;
import com.example.kalah.Strategy.Strategy;
import org.springframework.stereotype.Service;

import java.util.stream.IntStream;


@Service
public class SeedingService implements SeedingApi {
    @Override
    public Strategy seed(Strategy board, int SeedIndex) {

        if (SeedIndex == GameDefault.RightKalahIndex || SeedIndex == GameDefault.LeftKalahIndex) {
            return board;
        }

        if (board.getPlayer() == null) {
            if (SeedIndex < GameDefault.RightKalahIndex){
                board.setPlayer(PlayerTurns.PlayerOne);
            }
            else
            {
                board.setPlayer(PlayerTurns.Playertwo);
            }

        }

        if (board.getPlayer() == PlayerTurns.PlayerOne && SeedIndex > GameDefault.RightKalahIndex)
        {
            return board;
        }

        if( board.getPlayer() == PlayerTurns.Playertwo && SeedIndex < GameDefault.RightKalahIndex){
            return board;
        }

        KalahHouse house = board.getHouse(SeedIndex);
        int seeds = house.getSeeds();

        if (seeds == GameDefault.emptySeed){return board;};

        house.setSeeds(GameDefault.emptySeed);

        board.setCurrentHousePosition(SeedIndex);

        for (int i = 0; i < seeds ; i++) {
            Seeding(board,false);
        }

       // Seeding(board,true);

        int currentHousePosition = board.getCurrentHousePosition();

        if (currentHousePosition != GameDefault.RightKalahIndex && currentHousePosition != GameDefault.LeftKalahIndex)
            board.setPlayer(Turns(board.getPlayer()));

        return board;

    }


    private void Seeding(Strategy board, Boolean lastSeed) {
        int currentPosition = board.getCurrentHousePosition() % GameDefault.totalHouses + 1;

        PlayerTurns Turn = board.getPlayer();

        if ((currentPosition == GameDefault.RightKalahIndex && Turn == PlayerTurns.Playertwo) ||
                (currentPosition == GameDefault.LeftKalahIndex && Turn == PlayerTurns.PlayerOne)) {
            currentPosition = currentPosition % GameDefault.totalHouses + 1;
        }
        board.setCurrentHousePosition(currentPosition);
        KalahHouse TargettedHouse = board.getHouse(currentPosition);
        if (!lastSeed || currentPosition == GameDefault.RightKalahIndex || currentPosition == GameDefault.LeftKalahIndex) {
            TargettedHouse.FillSeeds();
            return;
        }

        KalahHouse ParralledHouse = board.getHouse(GameDefault.totalHouses - currentPosition);

        if (TargettedHouse.EmptySeededHouse() && !ParralledHouse.EmptySeededHouse()) {
            Integer ParallelSeed = ParralledHouse.getSeeds();
            ParralledHouse.EmptyHouse();
            Integer HouseIndex = currentPosition < GameDefault.RightKalahIndex ? GameDefault.RightKalahIndex: GameDefault.LeftKalahIndex;
            KalahHouse house = board.getHouse(HouseIndex);
            house.addSeed(ParallelSeed + 1);
            return;
        }

        ParralledHouse.FillSeeds();
    }

    public PlayerTurns Turns(PlayerTurns now) {
        if (now  == PlayerTurns.PlayerOne)
            return PlayerTurns.Playertwo;
        return PlayerTurns.PlayerOne;
    }
}

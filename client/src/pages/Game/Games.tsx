import React, {Fragment, FC, useEffect, useState} from 'react'
import styled, {css} from 'styled-components'
import {
  useHistory,  
  useParams
} from "react-router-dom";
import {api} from '../../util/api'

export const Games: FC = ()=> {
    var params = useParams();
    let History = useHistory();
    var [gameBoard, setgameBoard] = useState(undefined);

    const [playerTurn , setplayerTurn] = useState(null);

    var [PlayerofMatch, setPlayerofMatch] = useState(undefined);

     const Datafetch =  async (data: any): Promise<void> =>{        
            try {
                var BoardID = data.id;
                var BaseURL = "/" + BoardID;
                let fetch = await api.get(BaseURL);
                fetch = fetch.data;
                var CurrentPlayer = fetch.player;
                setplayerTurn(CurrentPlayer);
                console.log(fetch)
                setgameBoard(fetch);
            } catch (error) {
                throw error;
                           
            }            
        } 

    useEffect(()=>{        
        var data= params;        
        var players = localStorage.getItem('players');
        if(players == null){
            var player1 = prompt("Enter Player one Name ?");
            var player2 = prompt("Enter Player two Name ? ");

            var Registeringplayers = {player1, player2};
            players = JSON.stringify(Registeringplayers);
            localStorage.setItem('players', players);       

        }
        var allPlayers = JSON.parse(players);
        setPlayerofMatch(allPlayers);
        Datafetch(data);

    },[])


    function ZeroCheck(target : any) : any{
        if(target == 0){
            alert("House has no seeds");
        }
    }

    async function deleteHandler(parameter: any): Promise<void>{
        try {   
            parameter  = params;
            var deleteId = parameter.id;
            var BaseURL = '/delete/' + deleteId;
            var output = prompt("Do you want to deleted your Board ? If yes press OK ");
            if(output == ""){
                alert("Your Board is Successfully Deleted")
                await api.post(BaseURL, "");
            History.push("/")
            }else{
                alert("In order to delete it Press OK")
                window.location.reload();
            }           
        } catch (error) {
            throw error;
            
        }
    }


     async function GameHandler ( index: any) : Promise<void> {
         try {
            var positionvariant = index;
           if(gameBoard != undefined){
            var BoardID : any = gameBoard            
            BoardID = BoardID.gameId;
            var BaseURL = "/" + BoardID + "/houses/" + positionvariant;
           await api.put(BaseURL);
           window.location.reload();   
                       
           }
             
         } catch (error) {
             throw error;
             
         }
       }
    if(gameBoard){
       const Board: any = gameBoard;
       const BoardId = Board.gameId;
       var KalahHouse : any = Board.kalahHouse;
       var PlayerOneBoard = KalahHouse.slice(0, 6);
       var PlayerTwoBoard = KalahHouse.slice(7, 13).reverse();

       var PlayerTwoBoardTwo = PlayerOneBoard.reverse();
       var PlayerOneBoardTwo = PlayerTwoBoard.reverse();
       
       var AllThatarePlaying: any = PlayerofMatch;

       var playerx : any = AllThatarePlaying.player1;
       var playery = AllThatarePlaying.player2;

        const deleteTargetedURL : any = params;
        var URL : any  = deleteTargetedURL.id;


       //Checking for who is the winner

      let checker = PlayerOneBoard.every(function(item : any){
          return item.seeds == 0;
      })

     let checker2 = PlayerTwoBoard.every(function(item : any){
          return item.seeds == 0;
      })

      if(checker === true){
          return(
              <div className="text-center mx-auto">
               <h1 className="display-1"> 
              <span style={{color: 'pink'}}>{playerx}</span>
              </h1>

              <h1 className="display-5"> 
              
               won the Game </h1>
               <br/>
               <br/>
             <a href="/" className="btn btn-primary btn-lg"> Home </a> &nbsp; &nbsp;
               <button onClick={deleteHandler} className="btn btn-danger btn-lg">Delete Board </button>
             

              </div>
          )
      }

       if(checker2 === true){
          return(
              <div className="text-center mx-auto">
               <h1 className="display-1"> 
              <span style={{color: 'pink'}}>{playery}</span>
              </h1>

              <h1 className="display-5"> 
              
               won the Game </h1>
               <br/>
               <br/>
               <a href="/" className="btn btn-primary btn-lg"> Home </a> &nbsp; &nbsp;
                <button onClick={deleteHandler} className="btn btn-danger btn-lg">Delete Board </button>
             

              </div>
          )
      }



       console.log(checker)

       if(playerTurn == null){
           return (
        <Fragment>
        <Container>
        <InnerContainer> 
        <div className="text-center"> 
        
        <div className="alert alert-danger" role="alert">
            Your Board ID  is : {BoardId}
            </div>

            <div className="row">
                <div className="col-2"><HouseDeck cup > {playery} <br/>{KalahHouse[13].seeds}</HouseDeck></div>
                <div className="col-8">
                <div className="row">
                <div className="text-center">
                    <h1 className="display-4">{playery} </h1>
                    <br/>
                </div>

                {PlayerOneBoardTwo.reverse().map((Item : any, index : any)=>{
                    return <div className="col-2" key={index}><Playdot two>{Item.seeds}</Playdot></div>
                })}
                
                </div>
                <br/>
                <br/>
                <div className="row">
                 {PlayerTwoBoardTwo.reverse().map((Item : any, index : any)=>{
                    return <div className="col-2" key={index}>
                    {Item.seeds == 0 ? 
                    <Unplayeddot onClick={()=>{ZeroCheck(Item.seeds)}} cup>{Item.seeds}</Unplayeddot>                    
                    : 
                   <Playdot onClick={()=>{ZeroCheck(Item.seeds); GameHandler(Item.gameId)}} cup>{Item.seeds}</Playdot>
                    }
                    </div>
                })}
                              
                <div className="text-center">
                <br/>
                    <h1 className="display-4">{playerx}'s Turn</h1>
                </div>
                </div>
                </div>
                <div className="col-2 text-left"><HouseDeck>{playerx} <br/>{KalahHouse[6].seeds}</HouseDeck></div>
                
            </div>
        </div>
        </InnerContainer>
           <br/>
        <InnerContainer>
        <div className="text-center">
        <button onClick={deleteHandler} className="btn btn-lg btn-danger">Delete Board </button>
        </div>
        
        </InnerContainer>
        </Container>
        </Fragment>
        )

       }else{
            /// PlayerOne Board
           if(playerTurn === 'PlayerOne'){
             return (
        <Fragment>
        <Container>
        <InnerContainer> 
        <div className="text-center"> 
        
        <div className="alert alert-danger" role="alert">
            Your Board ID  is : {BoardId}
            </div>

            <div className="row">
                <div className="col-2"><HouseDeck cup > {playery} <br/>{KalahHouse[13].seeds}</HouseDeck></div>
                <div className="col-8">
                <div className="row">
                <div className="text-center">
                    <h1 className="display-4">{playerx} Turn </h1>
                    <br/>
                </div>

                {PlayerTwoBoard.reverse().map((Item : any, index : any)=>{
                    return <div className="col-2" key={index}>
                    {Item.seeds == 0 ? 
                    <Unplayeddot onClick={()=>{ZeroCheck(Item.seeds)}} cup>{Item.seeds}</Unplayeddot>                    
                   
                    : 
                   <Bluedot onClick={()=>{ZeroCheck(Item.seeds); GameHandler(Item.gameId)}} >{Item.seeds}</Bluedot>
                    }
                    </div>
                })}
                
                </div>
                <br/>
                <br/>
                <div className="row">
                 {PlayerOneBoard.reverse().map((Item : any, index : any)=>{
                    return <div className="col-2" key={index}>
                    {Item.seeds == 0 ? 
                    <Unplayeddot onClick={()=>{ZeroCheck(Item.seeds)}} cup>{Item.seeds}</Unplayeddot>                    
                    : 
                   <Playdot onClick={()=>{ZeroCheck(Item.seeds); GameHandler(Item.gameId)}} cup>{Item.seeds}</Playdot>
                    }
    
                    </div>
                })}
                
              
                <div className="text-center">
                <br/>
                
                </div>
                </div>
                </div>
                <div className="col-2 text-left"><HouseDeck>{playerx}<br/>{KalahHouse[6].seeds }</HouseDeck></div>
                
            </div>
        </div>
        </InnerContainer>
           <br/>
        <InnerContainer>
        <div className="text-center">
        <button onClick={deleteHandler} className="btn btn-lg btn-danger">Delete Board </button>
        </div>
        
        </InnerContainer>
        </Container>
        </Fragment>
        )


    }else{
        /// PlayerTwo Board

         return (
        <Fragment>
        <Container>
        <InnerContainer> 
        <div className="text-center"> 
        
        <div className="alert alert-danger" role="alert">
            Your Board ID  is : {BoardId}
            </div>

            <div className="row">
                <div className="col-2"><HouseDeck cup > {playerx} <br/>{KalahHouse[6].seeds}</HouseDeck></div>
                <div className="col-8">
                <div className="row">
                <div className="text-center">
                    <h1 className="display-4">{playery} Turn </h1>
                    <br/>
                </div>
                 {PlayerOneBoard.map((Item : any, index : any)=>{
                    return <div className="col-2" key={index}>
                    {Item.seeds == 0 ? 
                    <Unplayeddot onClick={()=>{ZeroCheck(Item.seeds)}} cup>{Item.seeds}</Unplayeddot>                  
                   
                    : 
                   <Greendot onClick={()=>{ZeroCheck(Item.seeds); GameHandler(Item.gameId)}} cup>{Item.seeds}</Greendot>
                    }
                    </div>
                })}             
                
                </div>
                <br/>
                <br/>
                <div className="row">              

                   {PlayerOneBoardTwo.map((Item : any, index : any)=>{
                    return <div className="col-2" key={index}>
                    {Item.seeds == 0 ? 
                    <Unplayeddot onClick={()=>{ZeroCheck(Item.seeds)}} cup>{Item.seeds}</Unplayeddot>                    
                    : 
                   <Bluedot onClick={()=>{ZeroCheck(Item.seeds); GameHandler(Item.gameId)}} cup>{Item.seeds}</Bluedot>
                    }                   
                    
                    </div>
                })}               
              
                <div className="text-center">
                <br/>
                   
                </div>
                </div>
                </div>
                <div className="col-2 text-left"><HouseDeck>{playery} <br/>{KalahHouse[13].seeds }</HouseDeck></div>
                
            </div>
        </div>
        </InnerContainer>
        <br/>
        <InnerContainer>
        <div className="text-center">
        <button onClick={deleteHandler} className="btn btn-lg btn-danger">Delete Board </button>
        </div>
        
        </InnerContainer>
                
        </Container>
        </Fragment>
        )
           }
          
       }        
    }
    else{
        return(
            <Fragment>
            <div className="text-center container">
            <h1 className="display-1"> Game Not Found </h1>
            <a href="/games/" className="btn btn-primary btn-lg">Browse Games </a>
            </div>

            </Fragment>
        )
    }

    
}


const HouseDeck: any  =  styled.div <{cup: boolean}>`
height: 20vh;
margin-top: 20vh;
width: 12vw;
border-radius: 20px;
background-color: #ff8d00;
color: white;
font-size: 22px;
text-align: center;
padding-top: 23px;


`
const Unplayeddot: any  =  styled.div <{cup: boolean}>`
height: 14vh;
width: 7vw;
border-radius: 50%;
background-color: red;
color: white;
font-size: 22px;
text-align: center;
padding-top: 23px;

`



const Greendot: any  =  styled.div <{cup: boolean}>`
height: 14vh;
width: 7vw;
border-radius: 50%;
background-color: green;
color: white;
font-size: 22px;
text-align: center;
padding-top: 23px;

`

const Bluedot: any  =  styled.div <{cup: boolean}>`
height: 14vh;
width: 7vw;
border-radius: 50%;
background-color: #021aee;
color: white;
font-size: 22px;
text-align: center;
padding-top: 23px;

${props => props.cup && css`
   &:hover {
        background-color: #ef0078;
        cursor: pointer;
         transform: scale(1.2);
    }
`}
`




const Playdot: any  =  styled.div <{cup: boolean}>`
height: 14vh;
width: 7vw;
border-radius: 50%;
background-color: #021aee;
color: white;
font-size: 22px;
text-align: center;
padding-top: 23px;

${props => props.cup && css`
   background-color: green;
   &:hover {
        background-color: #ef0078;
        cursor: pointer;
         transform: scale(1.2);
    }
`}
`



const PlaydotTwo: any  =  styled.div <{cup: boolean}>`
height: 14vh;
width: 7vw;
border-radius: 50%;
background-color: red;
color: white;
font-size: 22px;
text-align: center;
padding-top: 23px;

${props => props.cup && css`
   background-color: green;
   &:hover {
        background-color: #ef0078;
        cursor: pointer;
         transform: scale(1.2);
    }
`}
`

const InnerContainer = styled.div `
width: 80%;
margin: auto;

`

const Container = styled.div `
width: 95%;
margin: auto;
`
const Heading = styled.h1 `
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
font-family: 'Poppins', sans-serif;

`

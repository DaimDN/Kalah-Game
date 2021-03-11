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

     const Datafetch =  async (data: any): Promise<void> =>{        
            try {
                var BoardID = data.id;
                var BaseURL = "/" + BoardID;
                let fetch = await api.get(BaseURL);
                fetch = fetch.data;
                setgameBoard(fetch);
            } catch (error) {
                throw error;
                           
            }            
        }        
    useEffect(()=>{        
        var data= params;
        Datafetch(data);        

    },[])


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
       var KalahHouse : any = Board.kalahHouse.map((item: any)=>{return item.seeds});
       var PlayerOneBoard = KalahHouse.slice(0, 6);
       var PlayerTwoBoard = KalahHouse.slice(7, 13);


       

     

        return (
        <Fragment>
        <Container>
        <InnerContainer> 
        <div className="text-center"> 
        
        <div className="alert alert-danger" role="alert">
            Your Board ID  is : {BoardId}
            </div>

            <div className="row">
                <div className="col-2"><HouseDeck cup > Player 2 <br/>{KalahHouse[6] - 7}</HouseDeck></div>
                <div className="col-8">
                <div className="row">
                <div className="text-center">
                    <h1 className="display-4">Player 2 </h1>
                    <br/>
                </div>

                {PlayerTwoBoard.map((Item : any, index : any)=>{
                    return <div className="col-2" key={index}><Playdot two>{Item}</Playdot></div>
                })}
                
                </div>
                <br/>
                <br/>
                <div className="row">
                 {PlayerOneBoard.map((Item : any, index : any)=>{
                    return <div className="col-2" key={index}><Playdot onClick={()=>{GameHandler(index)}} cup>{Item}</Playdot></div>
                })}
                
              
                <div className="text-center">
                <br/>
                    <h1 className="display-4">You</h1>
                </div>
                </div>
                </div>
                <div className="col-2 text-left"><HouseDeck>Your <br/>{KalahHouse[13] - 14}</HouseDeck></div>
                
            </div>
        </div>
        </InnerContainer>
        </Container>
        </Fragment>
    )
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


const Playdot: any  =  styled.div <{cup: boolean}>`
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

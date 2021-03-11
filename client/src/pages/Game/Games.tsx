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


    if(gameBoard){
       const Board: any = gameBoard;
       const BoardId = Board.gameId;

        return (
        <Fragment>
        <Container>
        <InnerContainer> 
        <div className="text-center"> 
        
        <div className="alert alert-danger" role="alert">
            Your Board ID  is : {BoardId}
            </div>

            <div className="row">
                <div className="col-2"><Playdot cup >0</Playdot></div>
                <div className="col-8">
                <div className="row">
                <div className="text-center">
                    <h1 className="display-4">Computer</h1>
                    <br/>
                </div>
                
                <div className="col-2"><Playdot>4</Playdot></div>
                <div className="col-2"><Playdot>4</Playdot></div>
                <div className="col-2"><Playdot>4</Playdot></div>
                <div className="col-2"><Playdot>4</Playdot></div>
                <div className="col-2"><Playdot>4</Playdot></div>
                <div className="col-2"><Playdot>4</Playdot></div>
                </div>
                <br/>
                <br/>
                <div className="row">
                <div className="col-2"><Playdot>4</Playdot></div>
                <div className="col-2"><Playdot>4</Playdot></div>
                <div className="col-2"><Playdot>4</Playdot></div>
                <div className="col-2"><Playdot>4</Playdot></div>
                <div className="col-2"><Playdot>4</Playdot></div>
                <div className="col-2"><Playdot>4</Playdot></div>
               
                <div className="text-center">
                <br/>
                    <h1 className="display-4">You</h1>
                </div>
                </div>
                </div>
                <div className="col-2 text-left"><Playdot cup>0</Playdot></div>
                
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
    background-color: #ff9800  ;
    color: white;
    font-size: 24px;
    height: 15vh;
    width: 8vw;
    border-radius: 10px;
    margin: 0px 40px;  
    margin-top: 170px;  
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

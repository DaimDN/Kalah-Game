import React from 'react'
import {Fragment, FC, useEffect, useState} from 'react'
import {api} from '../../util/api'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import './style.css'
export const GameList : FC = ()=> {

    const [game, setGame] = useState(undefined);

    const fetch =  async (): Promise<void> =>{
            try {
                let fetch = await api.get('/all')
                fetch = fetch.data;
                setGame(fetch);
            } catch (error) {
                setGame(undefined); 
                throw error;                             
            }
        }
    useEffect(()=>{
        fetch();
    },[])

        if(undefined){
             return (
        <Fragment>
        <div className="container text-center">
        <h1 className="display-4"> No Games Available </h1>
        </div>
        </Fragment>)}
        else{
        return (
        <Fragment>
        <div className="row">
        <Dataset result={game}/>
        </div>
        </Fragment>
    )}   
}

interface DefaultDataTypeValidation  {
    result: any
}

const Dataset: FC<DefaultDataTypeValidation> = ({result})  =>{
    const FetchRequest = result;
    localStorage.setItem('StoredGames', JSON.stringify(FetchRequest));  
    if(FetchRequest !== undefined){
        return(
        <Fragment>
        <div className="row mx-auto text-center">
        {FetchRequest.map((item : any)=>{
             return <Fragment>
             <div className="col-3">
             <div className="deck bg-dark">
                 <InnerHeading>{item.gameId} </InnerHeading>
                <a href ={'games/' + item.gameId}className="btn btn-primary btn-lg">Play</a>
             </div>              

             </div>
             </Fragment>
        })}
        </div>        
        </Fragment>
    )   
    }
    else{
        return (
            <Fragment></Fragment>
        )}

}

const InnerHeading = styled.h4 `
font-size: 17px;
font-weight: 300;
color: white;
height: 100px;
`
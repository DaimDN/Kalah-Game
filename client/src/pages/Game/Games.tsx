import React, {Fragment, FC} from 'react'
import styled, {css} from 'styled-components'

export const Games: FC = ()=> {
    return (
        <Fragment>
        <Container>
        <div className="text-center">
            <h1 className="display-3">Kalah Game</h1>
        </div>
        <br/>
        <InnerContainer> 
        <div className="text-center"> 

            <div className="row">
                <div className="col-2"><br/><br/><br/><Playdot cup >10</Playdot></div>
                <div className="col-8">
                <div className="row">
                <div className="col-2"><Playdot>10</Playdot></div>
                <div className="col-2"><Playdot>10</Playdot></div>
                <div className="col-2"><Playdot>10</Playdot></div>
                <div className="col-2"><Playdot>10</Playdot></div>
                <div className="col-2"><Playdot>10</Playdot></div>
                <div className="col-2"><Playdot>10</Playdot></div>
                </div>
                <br/>
                <br/>
                <div className="row">
                <div className="col-2"><Playdot>10</Playdot></div>
                <div className="col-2"><Playdot>10</Playdot></div>
                <div className="col-2"><Playdot>10</Playdot></div>
                <div className="col-2"><Playdot>10</Playdot></div>
                <div className="col-2"><Playdot>10</Playdot></div>
                <div className="col-2"><Playdot>10</Playdot></div>
                </div>
                </div>
                <div className="col-2"><br/><br/><br/><Playdot cup>10</Playdot></div>
                
            </div>
        </div>
        </InnerContainer>
        </Container>
        </Fragment>
    )
}


const Playdot: any  =  styled.div <{cup: boolean}>`
height: 80px;
width: 80px;
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
    height: 90px;
    width: 100px;
    border-radius: 10px;
    margin: 0px 20px;
    
`}


`

const InnerContainer = styled.div `
width: 70%;
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

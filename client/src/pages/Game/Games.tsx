import React, {Fragment, FC} from 'react'
import styled, {css} from 'styled-components'

export const Games: FC = ()=> {
    return (
        <Fragment>
        <Container>
        <InnerContainer> 
        <div className="text-center"> 

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

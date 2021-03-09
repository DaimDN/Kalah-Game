import React, {Fragment, FC} from 'react'
import styled from 'styled-components'

export const Games: FC = ()=> {
    return (
        <Fragment>
        <Container>
        <h1>This is a Game</h1>
        <br/>

        <div className="row">
            <div className="col-xl-2"><Playdot>10</Playdot></div>


            <div className="col-xl-8">

            </div>
            <div className="col-xl-2"></div>
        </div>

        </Container>
        </Fragment>
    )
}


const Playdot = styled.div `
height: 80px;
width: 80px;
border-radius: 50%;
background-color: red;
color: white;
font-size: 22px;
text-align: center;
padding-top: 23px;
`

const Container = styled.div `
width: 95%;
margin: auto;
`
const Heading = styled.h1 `
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
font-family: 'Poppins', sans-serif;

`

import React, {FC, Fragment, useState, useEffect} from 'react'
import {api} from '../../util/api'
import styled from 'styled-components'
import {useHistory, Redirect} from 'react-router-dom'
import store from '../../store'
import { connect } from 'react-redux';


interface UserDashBoard {
    auth : {
        user : any
    }
  
}
const Home  =  ({ auth: {user}}: UserDashBoard)=> {
    const [data, setData] : any = useState(undefined);
    let History = useHistory();
    const [auth, setAuth] = useState(null);
        const fetch =  async (): Promise<void> =>{
            try {
                let fetch = await api.get('/')
                fetch = fetch.data;
                setData(fetch);
            } catch (error) {
                throw error;
                setData(undefined);                
            }
        }
        useEffect(()=>{
            fetch(); 
            
    });      


    const Proceed = async () : Promise<void> =>{         
    var ResponseFromServer : any ;
    let data = await api.post('/', "");
    data = data.data;
    const BoardAddress = data.gameId;
    var BaseURL = "/games/" + BoardAddress;
    History.push(BaseURL);            
    }
    
    return (
      <Container>
          <Fragment>
            {data ? 
            <Fragment>
            <Heading>{data.message} </Heading>
            <Heading2>Rules of Kalah</Heading2>
            <OrderList>
                <ListItem>At the beginning of the game, four seeds are placed in each house. This is the traditional method.</ListItem>
                <ListItem>Each player controls the six houses and their seeds on the player's side of the board. The player's score is the number of seeds in the store to their right.</ListItem>
                <ListItem>Players take turns sowing their seeds. On a turn, the player removes all seeds from one of the houses under their control. Moving counter-clockwise, the player drops one seed in each house in turn, including the player's own store but not their opponent's.</ListItem>
                <ListItem>If the last sown seed lands in an empty house owned by the player, and the opposite house contains seeds, both the last seed and the opposite seeds are captured and placed into the player's store.</ListItem>
                <ListItem>If the last sown seed lands in the player's store, the player gets an additional move. There is no limit on the number of moves a player can make in their turn.</ListItem>
                <ListItem>When one player no longer has any seeds in any of their houses, the game ends. The other player moves all remaining seeds to their store, and the player with the most seeds in their store wins.</ListItem>
            </OrderList>           


            <button onClick={Proceed} className="btn btn-primary btn-lg">Start</button>
            </Fragment> 
            : 
            <Fragment>
            </Fragment>            
            }
          </Fragment>
      </Container>
    )
}


const mapStateToProps = (state : any) => ({
    auth: state.auth
  });
  
export default connect(mapStateToProps, {})(
    Home
  );



const Container = styled.div `
width: 95%;
margin: auto;
`
const Heading = styled.h1 `
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
font-family: 'Poppins', sans-serif;
color: palevioletred;

`

const OrderList = styled.ol``;
const ListItem = styled.li`
list-decoration: none;
font-size: 18px;
`;

const Heading2 = styled.p `
font-size: 27px;

`


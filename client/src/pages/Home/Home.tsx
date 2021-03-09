import React, {FC, Fragment, useState, useEffect} from 'react'
import {api} from '../../util/api'
import styled from 'styled-components'

export const Home : FC =  ()=> {
    const [data, setData] : any = useState(undefined);
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
    }, []);


    return (
      <Container>
          <Fragment>
            {data ? 
            <Fragment>
            <Heading>{data.message} </Heading>
            </Fragment> 
            : 
            <Fragment>
            </Fragment>            
            }
          </Fragment>
      </Container>
    )
}


const Container = styled.div `
width: 95%;
margin: auto;
`

const Heading = styled.h1 `
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
font-family: 'Poppins', sans-serif;

`

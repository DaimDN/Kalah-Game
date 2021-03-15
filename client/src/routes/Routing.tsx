import React, {Fragment, FC, useEffect, useState} from 'react'
import {api} from '../util/api'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Navbar from '../components/Navbar'
import {Games} from '../pages/Game'
import {GameList} from '../pages/AllGames'
import {Provider} from 'react-redux';
import store from '../store';
import Private from '../routes/Private'
import Login from '../auth/Login';
import Register from '../auth/Register'
import Home from '../pages/Home/Home'


export const Routing: FC = ()=> {
  const [path, setPath] : any = useState(undefined);
  const [serverStatus, setServerStatus] = useState<boolean>(false);
  const fetch =  async (): Promise<void> =>{
      try {
          let fetch = await api.get('/default')
         setServerStatus(true)
          fetch = fetch.data;  
          setPath(fetch)          
      } catch (error) {    
        setPath("*")     
          throw error;          
      }
  }

  useEffect(()=>{
      fetch();        
}, []);

if(!serverStatus){
  return(   
    <Fragment> 
    <div className="text-center" >
    <h1 className="display-1">503 - Server Error</h1>
    </div>
    </Fragment>
)  
}
else{
  return (
    <Provider store={store}>
    <Router>
    <Fragment>
      <Navbar/>           
      <Switch>        
        <Route exact path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Private exact path="/start" component={Games}/>
        <Private exact path="/home" component={Home}/>
        <Route exact path="/" component={Login}/>
        <Private exact  path="/private" component={GameList} />
        <Private exact path="/games/:id" component={Games} />
        <Private exact path="/games" component={GameList}/> 
        <Route  exact path={path} component={DefaultRoute} />           
      </Switch>
    </Fragment>
  </Router>  
  </Provider>  
)
}  }   
const DefaultRoute = ()=> {
  return (
    <Fragment>
          <div className="text-center mx-auto">
            <h1 className="display-3">404 - Resource unavailable</h1>
          </div>      
    </Fragment>
  )

}

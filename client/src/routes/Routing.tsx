import React, {Fragment, FC, useEffect, useState} from 'react'
import {api} from '../util/api'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Home} from '../pages/Home'
import {Navbar} from '../components/Navbar'
import {Games} from '../pages/Game'
import {Errors} from '../components/Error'


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
    <Router>
    <Fragment>
      <Navbar/>                
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/start" component={Games}/>
        <Route  path={path} component={DefaultRoute} />           
      </Switch>
    </Fragment>
  </Router>    
)

}

  }   



const DefaultRoute = ()=> {
  return (
    <Fragment>
          <div className="text-center mx-auto">
            <h1 className="display-3">404 - Resource unavailable</h1>
          </div>      
    </Fragment>
  )

}

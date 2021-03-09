import React, {Fragment, FC, useEffect, useState} from 'react'
import {api} from '../util/api'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Home} from '../pages/Home'
import {Navbar} from '../components/Navbar'


export const Routing: FC = ()=> {
  const [path, setPath] : any = useState(undefined);
  const fetch =  async (): Promise<void> =>{
      try {
          let fetch = await api.get('/default')
          fetch = fetch.data;    
          setPath(fetch)
      } catch (error) {
          throw error;
          setPath("*");                
      }
  }
  useEffect(()=>{
      fetch();      
}, []);

    return (
        <Router>
        <Fragment>
          <Navbar/>                
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path={path} component={Error} />           
          </Switch>
        </Fragment>
      </Router>    
    )
}


const Error = ()=> {
  return (
    <Fragment>
          <div className="text-center mx-auto">
            <h1 className="display-3">404 - Resource unavailable</h1>
          </div>      
    </Fragment>
  )

}

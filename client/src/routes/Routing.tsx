import React, {Fragment, FC} from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Home} from '../pages/Home'


export const Routing: FC = ()=> {
    return (
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
          </ul>
  
          <hr />
  
         
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>            
          </Switch>
        </div>
      </Router>
    
    )
}


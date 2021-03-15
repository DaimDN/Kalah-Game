import React, {FC, Fragment, useEffect} from 'react'
import ReactDOM from 'react-dom'
import {Routing} from './routes/Routing'
import { setToken } from './util/setToken'
import store from './store'
import {loadUser} from './action/Auth'
import {LOGOUT} from './action/type'


const App = ()=>{

    useEffect(() => {
        if (localStorage.token) {
          setToken(localStorage.token);
        }
        store.dispatch(loadUser());
        window.addEventListener('storage', () => {
          if (!localStorage.token) store.dispatch({ type: LOGOUT });
        });
      }, []);


    return (
        <Fragment>
            <Routing/>        
        </Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));



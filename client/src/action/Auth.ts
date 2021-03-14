import { Dispatch } from 'react';
import {api} from '../util/api'
import {
  GET_PROFILE,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './type';
import {LoginController} from '../auth/Login'
import store from '../store';
import {setToken} from '../util/setToken'


export const Loadinguser = async () : Promise<void> =>  {   
    try {      
    const res = await api.get('/authUser'); 
    if(!res.data.error)
    {
      store.dispatch({
        type: USER_LOADED, 
        payload: res.data
      })
  
      store.dispatch({
        type: LOGIN_SUCCESS,
        payload: true
      })
  
      store.dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
  
    }
    else{
      store.dispatch({
        type: USER_LOADED,
        payload: {
          isAuthenticated: false,
          loading: false,
          user: false
        }
      })
    }
    
    } catch (error) {
      store.dispatch({
        type: LOGIN_FAIL
      })
      
    }
   
  
};

export const LocalStorageTokenChecker = ()=>{
  if(localStorage.getItem('token')!== null){
    Loadinguser();
  }
}

interface LoginHandlerInterface {
  email: any;
  password: any;
}

export const LoginHandler = async (payload: LoginHandlerInterface): Promise<void> =>  {
  const body = payload;
  const res = await api.post('/login', body);  
  
  if(res.data.error){
    store.dispatch({
      type: AUTH_ERROR,
      payload: res.data
    });
  }
  else{
    
    var GrabedToken : any = res.data.token;
    setToken(GrabedToken); 
    Loadinguser();
  }


};

// Logout
export const logout = () => ({ type: LOGOUT });


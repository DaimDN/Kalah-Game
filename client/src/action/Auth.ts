import { Dispatch } from 'react';
import {api} from '../util/api'
import {
  GET_PROFILE,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGOUT
} from './type';


export const loadUser : any = () => async (dispatch: any)   => {
  try {
    const res = await api.get('/authUser');
    

    if(res.data.error){
      dispatch({
        type: AUTH_ERROR
      });

    }else{
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    }

   
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

interface RegisterPanel {
  firstname: any,
  lastname: any,
  email: any,
  password: any
}

export const Register = async ({firstname, lastname, email, password}: RegisterPanel): Promise<void>=>{
 
  const formData =  {firstname, lastname, email, password};  
  try {
    const res = await api.post('/register', formData);
    if(res.status === 200){
      alert("Successfully Registered");
      window.location.href = '/';
    }
    else{
      window.location.href = "/register"
    }
    if(res.error){
      console.log("true")
    }
    
  } catch (error) {
    throw error;
    
  }
 

};

interface LoginInterface{
  email: any,
  password: any
}

export const login : any = ({email, password}: LoginInterface) => async (dispatch : any) => {
  const body = { email, password };

  try {
    const res = await api.post('/login', body);
     dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    throw err;

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const logout = () => ({ type: LOGOUT });
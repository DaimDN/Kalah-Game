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

export const Register : any = (formData: any) => async (dispatch : any )=> {
  try {
    const res = await api.post('/register', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data;

    if (errors) {
      throw errors;
    }

    dispatch({
      type: REGISTER_FAIL
    });
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
import { Dispatch } from 'react';
import {api} from '../util/api'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './type';
import {LoginController} from '../auth/Login'


export const Loadinguser = () => async (dispatch: any): Promise<void> => {
  try {
    const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

interface LoginHandlerInterface {
  email: any;
  password: any;
}

export const LoginHandler = async (payload: LoginHandlerInterface): Promise<void> =>  {
  const body = payload;
  const res = await api.post('/login', body);  
  console.log(res);

  try {
    
  } catch (error) {
    
  }

  
};

// Logout
export const logout = () => ({ type: LOGOUT });


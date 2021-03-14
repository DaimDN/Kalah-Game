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


export const LoadingUserProfile = () => async (dispatch : any ) => {
    try {
      const res = await api.get('/authUser');
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

  export const RegisterHandler = (formData : any) => async (dispatch : any) => {
    try {
      const res = await api.post('/register', formData);
  
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch(LoadingUserProfile());
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        throw errors;
      }
  
      dispatch({
        type: REGISTER_FAIL
      });
    }
  };


  export const LoginHandler = (email: any, password: any) => async (dispatch : any )=> {
    const body = { email, password };
    try {
      const res = await api.post('/login', body);  
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
  
      dispatch(LoadingUserProfile());
    } catch (err) {
      const errors = err.response.data.errors;  
      if (errors) {
        throw errors;
      }  
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };

  
  export const logout = () => ({ type: LOGOUT });
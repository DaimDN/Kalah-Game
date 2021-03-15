import axios from 'axios'
import store from '../store';
import { LOGOUT } from '../action/type'

const api : any = axios.create({
    baseURL: 'http://localhost:7000/',
    headers: {
    'Content-Type': 'application/json'
    }

})
api.interceptors.response.use((res : any)  => res,
    (err : any ) => {
      if (err.response.status === 401 ) {      
        store.dispatch({ type: LOGOUT });
      }
      return Promise.reject(err);
    }
  );



export {api};
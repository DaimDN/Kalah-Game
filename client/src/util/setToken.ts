import {api} from './api';


export const setToken : any = (token: any)  => {
  if (token) {
    api.defaults.headers.common['Auth'] = token;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['Auth'];
    localStorage.removeItem('token');
  }
};

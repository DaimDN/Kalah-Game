import {GET_PROFILE } from '../action/type';

const initialState = {
    profile: null
  };

  export default function (state = initialState, action : any) {
    const { type, payload } = action;  
    switch (type) {
      case GET_PROFILE:      
      default: 
      return state;
    }

}
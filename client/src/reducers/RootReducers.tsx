import { combineReducers } from 'redux';
import auth from './Auth';
import userProfile from './userProfile';

export default combineReducers({
  auth,
  userProfile
});
import { combineReducers } from 'redux';
import { loadUserReducer, loadUsersReducer, createUserReducer } from '../users/UserReducer';

const rootReducer = combineReducers({
  user: loadUserReducer,
  users: loadUsersReducer,
  newUser: createUserReducer
});

export default rootReducer;

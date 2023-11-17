import {combineReducers} from 'redux';
import global from './global';

const appReducer = combineReducers({
  global,
});

export default appReducer;

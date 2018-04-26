// this combines and exports all reducers for accesibility

// reducer is the last stage before actual change to data, it is the stage where 
// the requested action/change is defined

// reducers enact the action described/requested by the actions

import { combineReducers } from 'redux';
import stocks from './stocksReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  stocks,
  user,
});

export default rootReducer;
// this combines and exports all reducers for accesibility

// reducer is the last stage before actual change to state, it is the stage where 
// the changes made by actions are added to state

// reducers enact the changes to state described/requested by the actions

import { combineReducers } from 'redux';
import stocks from './stocksReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  stocks,
  user,
});

export default rootReducer;
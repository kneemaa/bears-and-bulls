// this reducer will reference actions that apply to user data like:
// portfolio value
// stocks owned
// contest opt in boolean
// available balance

import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
    switch (action.type) {
      case actionTypes.UPDATE_USER_AVAILABLE: {
        return action.data;
      }
      case "user": {
        return {...state, id: 2} 
      }
      default: {
        return state;
      }
    }
  }
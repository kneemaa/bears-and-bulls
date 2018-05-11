// this reducer will reference actions that apply to user data like:
// portfolio value
// stocks owned
// contest opt in boolean
// available balance

import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
    switch (action.type) {
      case actionTypes.GET_USER_SUCCESS: {
        return {...state, id: action.data._id, accountBalance: action.data.account_balance,
                firstName: action.data.first_name, lastName: action.data.last_name, 
                email: action.data.email, opted_out: action.data.competition_opted_out};
      }
      default: {
        return state;
      }
    }
  }
// this reducer will reference actions that apply to the array of stocks
// for the current user

import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function stocksReducer(state = initialState.stocks, action) {
    switch (action.type) {
      case actionTypes.BUY_THIS_STOCK: {
        return action.data
      }
      case actionTypes.GET_PORTFOLIO: {
        return action.data
      }
      default: {
        return state;
      }
    }
  }
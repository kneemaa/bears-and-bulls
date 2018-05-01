// this reducer will reference actions that apply to the array of stocks
// for the current user

import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function stocksReducer(state = initialState.stocks, action) {
    switch (action.type) {
      case actionTypes.BUY_STOCK_SUCCESS: {
        return state.push(action.data);
      }
      
      case actionTypes.SELL_STOCK_SUCCESS: {
        console.log("reducing state")
        return state.filter(stock => stock.symbol !== action.data.symbol)
      }
      default: {
        return state;
      }
    }
  }
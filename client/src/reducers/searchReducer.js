import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = initialState.search, action) {
    switch (action.type) {
      case actionTypes.SEARCH_STOCK: {
        return {
        	...state, 
        	symbol: action.data.symbol,
        	helpBlock: action.data.helpBlock,
        	price: action.data.price,
        }
      }
      default: {
        return state;
      }
    }
  }


import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = initialState.stocks, action) {
    switch (action.type) {
      case actionTypes.SEARCH_STOCK: {
        return action.data;
      }
      default: {
        return state;
      }
    }
  }
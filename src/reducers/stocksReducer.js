// this reducer will reference actions that apply to the array of stocks
// for the current user

import actionTypes from '../actions/actionTypes';
import initialState from './initialState';
import * as utils from "./socketMath"


export default function stocksReducer(state = initialState.stocks, action) {
    switch (action.type) {
      case actionTypes.BUY_THIS_STOCK: {
        return action.data
      }
      case actionTypes.GET_USER_PORTFOLIO: {
        return {
          ...state,
          owned: action.data
        }
      }

      case actionTypes.STOCK_DATA_RECEIVED: {
        return utils.stateUpdateMath(action.data, state)
	}

	  case actionTypes.UPDATE_CHART: {
		  return {
			  ...state, charted: action.data
		  }
	  }
      default: {
        return state;
      }
    }
  }
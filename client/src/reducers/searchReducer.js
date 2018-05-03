import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = initialState.search, action) {
    switch (action.type) {
      case actionTypes.SEARCH_STOCK: {
        return {
        	...state, 
        	lastKey: action.data.searchKey,
        	helpBlock: '',
        	price: action.data.price,
        }
      }
      default: {
        return state;
      }
    }
  }
/*{...state, id: action.data._id, accountBalance: action.data.account_balance,
                firstName: action.data.first_name, lastName: action.data.last_name, 
                email: action.data.email};*/
import initialState from './initialState';
import actionTypes from '../actions/actionTypes'

export default function contestReducer(state = initialState.contests, action) {
    switch (action.type) {
      case actionTypes.GET_GLOBAL_CONTESTANTS: {
        return {
        	...state, global:action.data
        }
      }
      default: {
        return state;
      }
    }
  }

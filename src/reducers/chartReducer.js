import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function chartReducer(state = initialState.charted, action) {
    switch (action.type) {
        case actionTypes.UPDATE_CHART: {
            return action.data
        }

      default: {
        return state;
      }
    }
  }


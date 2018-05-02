// this file defines actions that need to be taken on state.user
// update stocks owned
// update values
// update contest
// etc.

//import axios from 'axios'; // for outbound api calls
import actionTypes from './actionTypes';

export const updateAvailableBalance = data => {
    return {
        type: actionTypes.UPDATE_USER_AVAILABLE,
        data: data
    }
}
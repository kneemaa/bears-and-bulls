// this file defines actions that need to be taken on state.user
// update stocks owned
// update values
// update contest
// etc.

import axios from 'axios'; // for outbound api calls
import actionTypes from './actionTypes';

export const getUser = data => {
    return function(dispatch) {
    const email = data
        axios
            .get(`/api/user/${email}`)
            .then(data => {
                dispatch(getUserSuccess(data.data))
                dispatch(getPortfolioSuccess("aapl"))
            })
            .catch(error => {
                console.log(error)
                // dispatch(getUserFailure(email))
            })
    }
}

export const getUserSuccess = data => {
    return {
        type: actionTypes.GET_USER_SUCCESS,
        data: data
    }
}

export const getPortfolioSuccess = data => {
    return {
        type: "GET_PORTFOLIO_SUCCESS",
        stocks: data
    }
}


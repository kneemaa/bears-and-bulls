// this file defines actions that need to be taken on state.user
// update stocks owned
// update values
// update contest
// etc.

import axios from 'axios'; // for outbound api calls
import actionTypes from './actionTypes';
import {getPortfolio} from './stocksActions'

export const getUser = data => {
    return function(dispatch) {
    const user = data
    const email = data.email
        axios
            .get(`/api/user/${email}`)
            .then(data => {
                console.log(data.data)
                dispatch(getUserSuccess(data.data))
                dispatch(getPortfolio(data.data._id))
            })
            .catch(error => {
                console.log(error)
                dispatch(createUser(user))
            })
    }
}

export const getUserSuccess = data => {
    return {
        type: actionTypes.GET_USER_SUCCESS,
        data: data
    }
}

export const createUser = data => {
    console.log(data)
    return function(dispatch){
        axios
        .post("/api/newUser", {first_name: data.given_name, last_name: data.family_name, email: data.email})
        .then(data => {
            dispatch(getUserSuccess(data.data))
        })
        .catch(error => {
            console.log(error)
        })
    }
}


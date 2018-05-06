// this file defines functions that need to be taken on state.stocks
// buy
// sell 
// retrieve
// udate db

//import axios from "axios"; // for outbound api calls
import actionTypes from "./actionTypes";
import axios from 'axios'

export const getPortfolio = data => {
	return function(dispatch) {
		const userId = data
		axios.get(`/api/user/${userId}/portfolio`)
			.then(data => {
				console.log(data.data)
				dispatch(getUserPortfolio(data.data))})
			.catch(err => console.log(err))
	}
}


export const buyStock = data => {
    return {
        type: actionTypes.BUY_STOCK,
        data: data,
    }
}

export const sellStock = data => {
    return {
        type: actionTypes.SELL_STOCK,
        data: data,
    }
}

export const getUserPortfolio = data => {
    return {
        type: actionTypes.GET_USER_PORTFOLIO,
        data: data
    }
}
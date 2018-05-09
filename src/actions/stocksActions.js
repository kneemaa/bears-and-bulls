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
                let stockSymbolArray = data.data.map(stock => {
                    return stock.symbol
                })
                let symbolsForSocket = stockSymbolArray.join(",")
                console.log(symbolsForSocket)
                dispatch(getUserPortfolio(data.data))
                dispatch(openWebSocket(symbolsForSocket))
            })
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

export const openWebSocket = data => {
    return {
        type: actionTypes.OPEN_WEB_SOCKET,
        stocks: data
    }
}

export const updateChart = data => {
	return {
		type: actionTypes.UPDATE_CHART,
		data: data
	}
}
// this file defines functions that need to be taken on state.stocks
// buy
// sell 
// retrieve
// udate db

import axios from "axios"; // for outbound api calls
import actionTypes from "./actionTypes";

export const buyStockSuccess = data => {
    return {
        type: actionTypes.BUY_STOCK_SUCCESS,
        data: data,
    }
}

export const buyStock = (data) => {
    return function(dispatch) {
        // API to add stock to the database
        // .then(data){
        //      dispatch(buyStockSuccess(data)) // data needs to be formatted stock object
        // }
    }
}

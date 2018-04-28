// this file defines functions that need to be taken on state.stocks
// buy
// sell 
// retrieve
// udate db

import axios from "axios"; // for outbound api calls
import actionTypes from "./actionTypes";

export const buyStock = data => {
    return {
        type: actionTypes.BUY_THIS_STOCK,
        data: data,
    }
}


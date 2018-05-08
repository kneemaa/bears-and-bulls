import io from "socket.io-client"
import actionTypes from "./actions/actionTypes";


const socketMiddleware = store => next => action => {

    // listen for action when we get users portfolio
    if (action.type === "OPEN_WEB_SOCKET") {
        // instantiate socket connection
        const socket = io('https://ws-api.iextrading.com/1.0/tops');
    

    socket.on('connect', () => {
        // on connect subscripbe to user stocks which should be attched to the action
        socket.emit("subscribe", action.stocks)
    })

    socket.on("message", (data) => {
        // do something with data
        let stockInfo = JSON.parse(data)
        let {symbol, lastSalePrice} = stockInfo
        console.log(symbol)
        console.log(lastSalePrice)

        // dispatch data received to update stocks data in redux
        store.dispatch({
            type: actionTypes.STOCK_DATA_RECEIVED,
            data: {symbol: symbol, lastPrice: lastSalePrice}
        })
    })
    }
    // keep the midleware going!!
    return next(action);

}



export default socketMiddleware
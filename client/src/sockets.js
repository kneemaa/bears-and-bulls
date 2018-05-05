import io from "socket.io-client"

const socketMiddleware = store => next => action => {

    // listen for action when we get users portfolio
    if (action.type === "GET_PORTFOLIO_SUCCESS") {
        // instantiate socket connection
        const socket = io('https://ws-api.iextrading.com/1.0/tops');
    

    socket.on('connect', () => {
        // on connect subscripbe to user stocks which should be attched to the action
        socket.emit("subscribe", action.stocks)
    })

    socket.on("message", (data) => {
        // do something with data
        console.log(data)
        // dispatch data received to update stocks data in redux
        store.dispatch({
            type: "STOCK_DATA_RECEIVED",
            data
        })
    })
    }
    // keep the midleware going!!
    return next(action);

}



export default socketMiddleware
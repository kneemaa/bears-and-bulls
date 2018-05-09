// this file basically consolidates a list of all the possible actionTypes for the app
// and makes them accessible to all reducers through the exported "actions"

// actions call reducers with an actionType that tells the reducer what to do to state
// actions describe/request something to happen to state, and the reducer responds to the action by updating state

// how does it call the reducer? "Under the hood magic?" :yes

const actions = {
    BUY_STOCK: "BUY_STOCK",
    SELL_STOCK: "SELL_STOCK",
    SEARCH_STOCK: "SEARCH_STOCK",
    UPDATE_USER_AVAILABLE: "UPDATE_USER_AVAILABLE",
    GET_USER: "GET_USER", // QUERIES THE DB TO RETURN USER BASED ON EMAIL FROM AUTH0
    GET_USER_SUCCESS: "GET_USER_SUCCESS", // CREATES REDUCER OBJECT TO UPDATE STATE
    GET_USER_FAILURE: "GET_USER_FAILURE", // DISPATCHES CREATE_NEW_USER
    CREATE_NEW_USER: "CREATE_NEW_USER", // CREATES NEW USER IN THE DB AND RETURNS
    CREATE_NEW_USER_SUCCESS: "CREATE_NEW_USER_SUCCESS", // CREATES REDUCER OBJECT TO UPDATE STATE
    CREATE_NEW_USER_FAILURE: "CREATE_NEW_USER_FAILURE", // RETURNS ERROR
}

export default actions
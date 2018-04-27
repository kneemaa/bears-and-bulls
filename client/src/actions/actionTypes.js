// this file basically consolidates a list of all the possible actionTypes for the app
// and makes them accessible to all reducers through the exported "actions"

// actions call reducers with an actionType that tells the reducer what to do to state
// actions describe/request something to happen to state, and the reducer responds to the action by updating state

// how does it call the reducer? "Under the hood magic?" :yes

const actions = {
    BUY_THIS_STOCK: "BUY_THIS_STOCK",

    UPDATE_USER_AVAILABLE: "UPDATE_USER_AVAILABLE"
}

export default actions
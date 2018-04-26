// this file basically consolidates a list of all the possible actioTypes for the app
// and makes them accessible to all reducers through the exported "actions"

// actions call reducers with an actionType that tells the reducer what to do
// actions describe/request something to happen, and the reducer responds to the action

// how does it call the reducer? "Under the hood magic?"

const actions = {
    BUY_THIS_STOCK: "BUY_THIS_STOCK",

    UPDATE_USER_AVAILABLE: "UPDATE_USER_AVAILABLE"
}

export default actions
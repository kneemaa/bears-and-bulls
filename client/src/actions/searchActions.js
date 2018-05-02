import actionTypes from "./actionTypes";

export const searchStock = data => {
    return {
        type: actionTypes.SEARCH_STOCK,
        data: data,
    }
}

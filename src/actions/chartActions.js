import actionTypes from "./actionTypes";

export const updateChart = data => {
    return {
        type: actionTypes.UPDATE_CHART,
        data: data
    }
}
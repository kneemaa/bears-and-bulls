import actionTypes from "./actionTypes";
import axios from 'axios'

export const getGlobalContestants = data => {
    return {
        type: actionTypes.GET_GLOBAL_CONTESTANTS,
        data: data,
    }
}
// (portfolio / 100k) / days
export const query_getGlobalContestants = () => {
	return function(dispatch) {
			let url = `/api/contests/globalContestants`
			axios.get(url)
				.then(data => {
					console.log(data.data)
					dispatch(getGlobalContestants(data.data))
				})
				.catch(err => 
					console.log(err))
			}
	}
import actionTypes from "./actionTypes";
import axios from 'axios'
import moment from 'moment'
import jsonSort from 'sort-json-array'

export const getGlobalContestants = data => {
    return {
        type: actionTypes.GET_GLOBAL_CONTESTANTS,
        data: data,
    }
}


export const query_getGlobalContestants = () => {
	return function(dispatch) {
			let url = `/api/contests/globalContestants`
			axios.get(url)
				.then(data => {
					let results = data.data
					let trimmedResults = []

					results.map(result => {
						let days_since = moment().diff(result.createdAt, 'days')
						let average_growth = Number((result.total_balance - 100000) / 100000) / days_since
						return trimmedResults.push({
								user: `${result.first_name} ${result.last_name}`,
								total_balance: result.total_balance,
								percentage_growth: Number((result.total_balance - 100000) / 100000),
								last_login: result.updatedAt,
								days_since_signup: moment().diff(result.createdAt, 'days'),
								average_growth: days_since > 0 ? average_growth : 0,
							})
					})

					let sorted = jsonSort(trimmedResults, "average_growth", "des")

					dispatch(getGlobalContestants(sorted))
				})
				.catch(err => 
					console.log(err))
			}
}

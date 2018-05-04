import actionTypes from "./actionTypes";
import axios from 'axios'

export const searchStock = data => {
    return {
        type: actionTypes.SEARCH_STOCK,
        data: data,
    }
}


export const query = searchKey => {
		return function(dispatch) {
			let url = `https://api.iextrading.com/1.0/tops/last?symbols=${searchKey}`
			axios.get(url)
				.then(res => {
					
					let price = res.data[0].price
					console.log(price)
					if (price !== undefined) {
						let data = { price: price, searchKey: searchKey, helpBlock: ''}
						console.log(data)
						dispatch(searchStock(data))
						return
					}
					dispatch(searchStock({ searchKey: searchKey, helpBlock: `${searchKey} is not a valid stock symbol. Please try again.`}))
					return
				})
				.catch(err => 
					console.log(err))
			}
	}
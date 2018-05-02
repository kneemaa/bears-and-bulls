import axios from 'axios'

const query = searchKey => {
	return new Promise(function(resolve, reject) {
		let url = `https://api.iextrading.com/1.0/tops/last?symbols=${searchKey}`
		axios.get(url)
			.then(res => {
				let price = res.data[0]["price"]
				if (price !== undefined) {
					resolve({
								price: price,
								searchKey: ''
							})
				}
				reject({ helpBlock: `${searchKey} is not a valid stock symbol. Please try again.`})
			})
			.catch(err => console.log(err))

	})
	
}

export default query
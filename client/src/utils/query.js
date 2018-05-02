import axios from 'axios'

const query = searchKey => {
	let url = `https://api.iextrading.com/1.0/tops/last?symbols=${searchKey}`

		axios.get(url)
			.then(res => {
				let price = res.data[0]["price"]
				if (price !== undefined) {
					return this.setState({
						price: price,
						searchKey: ''
					})
				}
				this.setState({
					helpBlock: `${searchKey} is not a valid stock symbol. Please try again.`
				})

			})
			.catch(err => console.log(err))
}

module.exports = query

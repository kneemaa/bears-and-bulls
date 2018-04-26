import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

import './Search.css'

class Search extends Component {
	state = {}

	handleChange = event => {
		this.setState({searchKey: event.target.value})
	}

	handleSubmit = event => {
		let searchKey = (this.state.searchKey).trim().toUpperCase()
		let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${searchKey.replace(/ /g,'')}&apikey=GNC3G50UKYCQIXVN`
		this.setState({lastKey: searchKey})
		axios.get(url)
			.then(data => {
				if (data['Meta Data'] === undefined){
					console.log(`${searchKey} - No Stock found. Please enter a correct symbol`)
				} else {
					let today = moment().format('YYYY-MM-DD')
					if (data["Time Series (Daily)"][today] === undefined) {
						today = moment().subtract(1, 'days').format('YYYY-MM-DD');
						if (data["Time Series (Daily)"][today] === undefined) {
							today = moment().subtract(2, 'days').format('YYYY-MM-DD');
						}
					}
					const price = parseFloat(data["Time Series (Daily)"][today]['1. open'])
					console.log(price)
					this.setState({price: price})
				}
			})
			.catch(err => console.log(err))

	}
	render() {
		return (
			<div>
				<h1>Search</h1>
				<p>Key: {this.state.lastKey}</p>
				<p>{this.state.price}</p>
				<input type="text" onChange={this.handleChange}></input>
				<input type="submit" onClick={this.handleSubmit} value="Submit"></input>
			</div>
			)
	}
}

export default Search
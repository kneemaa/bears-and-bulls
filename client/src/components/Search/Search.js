import React, { Component } from 'react'
import { Button, FormControl, HelpBlock } from 'react-bootstrap'
import axios from 'axios'
import moment from 'moment'

import './Search.css'

class Search extends Component {
	state = {
		searchKey: ''
	}

	handleChange = event => {
		this.setState({searchKey: event.target.value})
	}

	handleSubmit = event => {
		this.setState({ helpBlock: ''})
		let searchKey = (this.state.searchKey).trim().toUpperCase()
		let url = `https://api.iextrading.com/1.0/tops/last?symbols=${searchKey}`
		this.setState({lastKey: searchKey})
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
	render() {
		return (
			<div className='searchComponent'>
				<h1>Search</h1>
				{this.state.lastKey !== '' ? (
					<div>
						<p>Key: {this.state.lastKey}</p>
						<p>{this.state.price}</p>
					</div>
					) : (
					<div>Nothing to show</div>)}
				<FormControl value={this.state.searchKey} className='searchInput' onChange={this.handleChange} componentClass='input'/>
				<Button type='submit' onClick={this.handleSubmit} value='Submit'>Search</Button>
				<HelpBlock>{this.state.helpBlock}</HelpBlock>
			</div>
			)
	}
}

export default Search
import React, { Component } from 'react'
import { Button, FormControl, HelpBlock } from 'react-bootstrap'
import query from '../../utils/query'
import axios from 'axios'

import './Search.css'

class Search extends Component {
	state = {
		searchKey: ''
	}

	handleChange = event => {
		this.setState({searchKey: event.target.value})
	}

	componentWillMount() {
		this.lookUp(this.props.match.params.symbol)
	}

	lookUp = (searchKey) => {
		this.setState({ helpBlock: ''})
		searchKey ? searchKey = searchKey.trim().toUpperCase() : searchKey = ''
		
		query(searchKey).then(res => this.setState(res)).catch(err => this.setState(err))
		
		this.setState({lastKey: searchKey})

	}

	handleSubmit = event => {
		event.preventDefault()
		console.log('posting')
		this.props.history.push(`/search/${this.state.searchKey}`)
		window.location.reload()
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
					<div>{/*empty div*/}</div>)}
				<form className='searchForm' onSubmit={this.handleSubmit}>
				<FormControl value={this.state.searchKey} className='searchInput' onChange={this.handleChange} componentClass='input'/>
				<Button type='submit' onClick={this.handleSubmit} value='Submit'>Search</Button>
				<HelpBlock>{this.state.helpBlock}</HelpBlock>
				</form>
			</div>
			)
	}
}

export default Search
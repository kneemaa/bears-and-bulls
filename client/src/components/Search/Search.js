import './Search.css'
import React, { Component } from 'react'
import { Button, FormControl, HelpBlock } from 'react-bootstrap'
import * as searchActionCreators from '../../actions/searchActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
	  return {
	    search: state.search,
	  };
	}

function mapDispatchToProps(dispatch) {
  return {
    searchActions: bindActionCreators(searchActionCreators, dispatch),
  };
}

class Search extends Component {
	state = {
		searchKey: ''
	}


	handleChange = event => {
		this.setState({searchKey: event.target.value})
	}

	handleSubmit = event => {
		event.preventDefault()
		let searchKey = this.state.searchKey.trim().toUpperCase()
		this.props.searchActions.query(searchKey)
	}

	render() {
		return (
			<div className='searchComponent'>
				<h1>Search</h1>
				{this.props.search.lastKey !== '' ? (
					<div>
						<p>Key: {this.props.search.lastKey}</p>
						<p>{this.props.search.price ? this.props.search.price : ''}</p>
					</div>
					) : (
					<div>{/*empty div*/}</div>)}
				<form className='searchForm' onSubmit={this.handleSubmit}>
				<FormControl value={this.state.searchKey} className='searchInput' onChange={this.handleChange} componentClass='input'/>
				<Button type='submit' onClick={this.handleSubmit} value='Submit'>Search</Button>
				<HelpBlock>{this.props.search.helpBlock}</HelpBlock>
				</form>
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

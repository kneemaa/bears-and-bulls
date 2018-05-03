import './Search.css'
import React, { Component } from 'react'
import { Tabs, Tab, Button, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'
import * as searchActionCreators from '../../actions/searchActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BarChart from '../BarChart/BarChart'

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
		searchSymbol: '',
		qty: 0,
	}


	handleChange = event => {
		this.setState({searchSymbol: event.target.value})
	}

	handleSubmit = event => {
		event.preventDefault()
		let searchSymbol = this.state.searchSymbol.trim().toUpperCase()
		this.props.searchActions.query(searchSymbol)
	}

	constructor(props, context) {
		super(props, context)
		this.handleSelect = this.handleSelect.bind(this)
	}

	handleSelect = (key) => {
		this.setState({key})
	}

	handleChangeSymbol = (event) => {
		this.setState({symbol: event.target.value.trim().toUpperCase()})
	}

	handleChangeQTY = (event) => {
		this.setState({qty: event.target.value})
	}

	validateSymbol = () => {
		if (this.props.search.symbol.length) {
			    if (/^[a-zA-Z]+$/.test(this.state.symbol)) {
			      return null
			    }
			    return 'error'
			  }
		return null
	}

	validateQty = () => {
		if (this.state.qty.length) {
			    if (isNaN(this.state.qty)) {
			      return 'error'
			    }
			    return null
			} 
		return null
	}

	render() {
		return (
		<div>
			<div className='searchComponent'>
				<h1>Search & Trade</h1>
				{this.props.search.symbol !== '' ? (
					<div>
						<p>Key: {this.props.search.symbol}</p>
						<p>{this.props.search.price ? this.props.search.price : ''}</p>
					</div>
					) : (
					<div>{/*empty div*/}</div>)}
				<form className='searchForm' onSubmit={this.handleSubmit}>
				<span className='search-span'>
					<FormControl value={this.state.searchSymbol} className='searchInput' onChange={this.handleChange} componentClass='input'/>
					<Button type='submit' onClick={this.handleSubmit} value='Submit'>Search</Button>
				</span>
				<HelpBlock>{this.props.search.helpBlock}</HelpBlock>
				</form>

			</div>
			<div className='chartComponent'>
			{this.props.search.price != 0 ? (
				<BarChart symbol={this.props.search.symbol} style={{height:400, width:'100%'}}/>
				/*<Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="trade-pane">

					<Tab eventKey={1} title="Buy Stocks">
						<FormGroup controlId='formValidationError' validationState={this.validateSymbol()}>
							<ControlLabel>Enter Stock Symbol:</ControlLabel>
							<FormControl onChange={this.handleChangeSymbol} onBlur={() => console.log('blur symbol')}/>
						</FormGroup>
						<div></div>
						<FormGroup controlId='qtyValidation' validationState={this.validateQty()}>
							<ControlLabel>Quantity to Buy:</ControlLabel>
							<FormControl onChange={this.handleChangeQTY} onBlur={() => console.log('blur qty')}/>
						</FormGroup>
						<Button className='trade-buy-button'>Buy!</Button>
						<Button className='trade-lookup=button'>Look Up</Button>
					</Tab>
					<Tab eventKey={2} title="Sell Stocks">
						<FormGroup controlId='formValidationError' validationState={this.validateSymbol()}>
							<ControlLabel>Enter Stock Symbol:</ControlLabel>
							<FormControl onChange={this.handleChangeSymbol} onBlur={() => console.log('blur symbol')}/>
						</FormGroup>
						<div></div>
						<FormGroup controlId='qtyValidation' validationState={this.validateQty()}>
							<ControlLabel>Quantity to Sell:</ControlLabel>
							<FormControl onChange={this.handleChangeQTY} onBlur={() => console.log('blur qty')}/>
						</FormGroup>
						<Button className='trade-sell-button'>Sell!</Button>
						<Button className='trade-lookup=button'>Look Up</Button>
					</Tab>
				</Tabs>*/
			) : (<div></div>)}
			</div>
		</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

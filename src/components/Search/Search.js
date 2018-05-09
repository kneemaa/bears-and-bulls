import './Search.css'
import axios from 'axios'
import React, { Component } from 'react'
import { Button, FormControl, FormGroup, HelpBlock } from 'react-bootstrap'
import * as searchActionCreators from '../../actions/searchActions'
import * as userActionCreators from '../../actions/userActions'
import * as stocksActionCreators from '../../actions/stocksActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BarChart from '../BarChart/BarChart'


function mapStateToProps(state) {
	  return {
	    search: state.search,
	    user: state.user,
	    stocks: state.stocks
	  };
	}

function mapDispatchToProps(dispatch) {
  return {
    searchActions: bindActionCreators(searchActionCreators, dispatch),
    userActions:bindActionCreators(userActionCreators, dispatch),
    stocksActions:bindActionCreators(stocksActionCreators, dispatch),
  };
}

class Search extends Component {
	constructor(props, context) {
		super(props, context)
		this.handleSelect = this.handleSelect.bind(this)
	}

	state = {
		searchSymbol: '',
		quantity: 0,
		action: '',
		localHelpBlock: ''
	}


	handleChange = event => {
		this.setState({searchSymbol: event.target.value})
	}

	handleSubmit = event => {
		event.preventDefault()
		let searchSymbol = this.state.searchSymbol.trim().toUpperCase()
		this.props.searchActions.query(searchSymbol)
	}

	handleSelect = (key) => {
		this.setState({key})
	}

	handleChangeSymbol = (event) => {
		this.setState({symbol: event.target.value.trim().toUpperCase()})
	}

	handleQuantityChange = (event) => {
		this.setState({quantity: Number(event.target.value)})
		let subtotal = event.target.value * this.props.search.price
		this.setState({ subtotal: Number(subtotal.toFixed(2)) })
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

	validateQuantity = () => {
		if (this.state.quantity.length) {
			    if (isNaN(this.state.quantity)) {
			      return 'error'
			    }
			    return null
			}
		return null
	}

	getOwnedCount = () => {
		if (this.props.stocks.owned.length > 0) {
			let searched_stock = this.props.stocks.owned.find(stock => {return stock.symbol === this.props.search.symbol.trim().toUpperCase()})
			return searched_stock ? searched_stock.stock_count : 0;
		}
		return 0;
	}

	actionHandler = (action) => {
		switch (action) {
			case 'buy':
				if (this.props.user.accountBalance >= this.state.subtotal) {
					let newBalance = this.props.user.accountBalance - this.state.subtotal
					let email = this.props.email
						axios({
							method: 'POST',
							url: `/api/user/trade`,
							data:{
								'symbol': this.props.search.symbol,
								'purchase_price': this.props.search.price,
								'stock_count': this.state.quantity,
								'owned_by': this.props.user.id
							},
						}).then((data) => {
							axios({
								method: 'POST',
								url: `/api/user/${this.props.user.id}/update`,
								data: {
									account_balance: newBalance.toFixed(2)
								}
							})
							.then(res => this.props.userActions.getUser({email:this.props.user.email}))
							.catch(err => console.log(err))
						})
					} else {
						this.setState({localHelpBlock: `Not enough funds in your account! Make sure you're logged in.`})
					}
				break;
			case 'sell':
				console.log((this.props.search.price) * -1)
				if (this.getOwnedCount(this.props.search.symbol) >= this.state.quantity) {
					let newBalance = this.props.user.accountBalance + this.state.subtotal
					console.log(newBalance)
					axios({
							method: 'POST',
							url: `/api/user/trade`,
							data:{
								'symbol': this.props.search.symbol,
								'purchase_price': ((this.props.search.price) * -1),
								'stock_count': (this.state.quantity * -1),
								'owned_by': this.props.user.id
							},
						}).then((data) => {
							axios({
								method: 'POST',
								url: `/api/user/${this.props.user.id}/update`,
								data: {
									account_balance: newBalance
								}
							})
							.then(res => this.props.userActions.getUser({email:this.props.user.email}))
							.catch(err => console.log(err))
						})
				} else {
					this.setState({localHelpBlock: `You can't sell more stocks than you own.`})
				}
				break;
			default:
				console.log('Action was not "Buy" or "Sell"')
				break;
		}
	}

	render() {
		return (
		<div className="row">
			<div className='searchComponent col-12'>
				<h1>Search & Trade</h1>
				{this.props.search.price !== 0 ? (
					<div>
						<table className="table table-hover mt-5 show-hide">
							<thead>
								<tr>
									<th>Symbol</th>
									<th>Current Price ($)</th>
									<th>QTY Owned</th>
									<th>QTY to Purchase</th>
									<th>Subtotal</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>{this.props.search.symbol}</th>
									<th>{this.props.search.price}</th>
									<th>{this.getOwnedCount()}</th>
									<th>
										<FormGroup controlId='formValidationError' validationState={this.validateQuantity()} >
											<FormControl value={this.state.quantity} className='quantityInput' onChange={this.handleQuantityChange} componentClass='input' />
										</FormGroup>
									</th>
									<th>{this.state.subtotal ? this.state.subtotal : 0}</th>
									<th>
										<Button type='submit' onClick={() => this.actionHandler('buy')}>Buy</Button>
										<Button type='submit' onClick={() => this.actionHandler('sell')}
											disabled={this.getOwnedCount() > 0 ? false : true}>Sell</Button>
									</th>
								</tr>
							</tbody>
						</table>
						<HelpBlock>{this.state.localHelpBlock}</HelpBlock>
						<BarChart symbol={this.props.search.symbol} style={{height:400, width:'100%'}}/>
						<hr/>
					</div>
					) : (<div></div>)}
				<form className='searchForm' onSubmit={this.handleSubmit}>
				<span className='search-span'>
					<FormControl value={this.state.searchSymbol} className='searchInput' onChange={this.handleChange} componentClass='input'/>
					<Button type='submit' onClick={this.handleSubmit} value='Submit'>Search</Button>
				</span>
				<HelpBlock>{this.props.search.helpBlock}</HelpBlock>
				</form>
			</div>
		</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

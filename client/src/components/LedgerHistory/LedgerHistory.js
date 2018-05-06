import './LedgerHistory.css'
import React, { Component } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import { connect } from 'react-redux'

function mapStateToProps(state) {
	  return {
	    user: state.user,
	  };
	}

class LedgerHistory extends Component {
	state = {history:[]}

	componentDidMount() {
		this.getHistory()
	}
	getHistory = () => {
		let self = this
		if (this.props.user.id !== 0) {
			axios.get(`/api/user/${this.props.user.id}/history`)
				.then(function(res) {
					self.setState({history:res.data})
					return
				})
		}
		return
	}

	render() { 
		return (
		<div>
			<table className="table table-hover mt-5 show-hide">
				<thead>
					<tr>
						<th>Symbol</th>
						<th>Date</th>
						<th>QTY</th>
						<th>Price / Share</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
				{(this.state.history).map(entry => {
					return (
						<tr key={entry._id}>
							<th>{entry.symbol}</th>
							<th><Moment format="MM/DD/YYYY HH:mm:ss">{entry.createdAt}</Moment></th>
							<th>{entry.stock_count}</th>
							<th>${entry.purchase_price}</th>
							<th>{Math.sign(entry.stock_count) === -1 ? '-$' : '$'}{entry.stock_count * entry.purchase_price}</th>
						</tr>)

				})}
				</tbody>
			</table>
		</div>)}
	}

export default connect(mapStateToProps)(LedgerHistory)
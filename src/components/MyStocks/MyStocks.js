import React from 'react';
import { Button } from 'react-bootstrap';
import * as stocksActionCreators from "../../actions/stocksActions"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MyStocks.css';
import sortArray from "sort-json-array"

const MyStocks = props => (

	<div className="my-stock-history col-12">
		<h1>My Stocks</h1>
		<table className="table table-hover text-center">
			<thead>
				<tr>
					<th>Symbol</th>
					<th>QTY</th>
					<th>$ Last Price</th>
					<th>$ Market Value</th>
					<th>$ Purchase Price</th>
					<th>$ Total Gain</th>
					<th>$ Profit/Loss</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{sortArray(props.stocks.owned, "symbol").map(stock => (
					//reset the key to be something more unique
					<tr key={stock.symbol}>
						<td>{stock.symbol} </td>
						<td>{stock.stock_count} </td>
						<td>{stock.last_price} </td>
						<td>{stock.market_value}</td>
						<td>{stock.purchase_price} </td>
						<td>{stock.total_gain} </td>
						<td>{stock.profit_loss} </td>
						<td><Button onClick={() => props.stocksActions.updateChart(stock.symbol)}>Chart</Button></td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
)


function mapStateToProps(state) {
    return {
      stocks: state.stocks,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      stocksActions: bindActionCreators(stocksActionCreators, dispatch),

    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(MyStocks);

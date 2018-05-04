import React from "react"
import * as stocksActionCreators from "../../actions/stocksActions"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const MyStocks = (props) => {
    console.log(props.stocks)
    return (
        <div>
            <h1>My Stocks</h1>
            <ul>
            {props.stocks.owned.map(stock => (
                    //reset the key to be something more unique
                <li key={stock.symbol}> {stock.symbol}, {stock.paid}, {stock.quantity}</li>
            ))}
            </ul>
            
        </div>
    )
}


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
  
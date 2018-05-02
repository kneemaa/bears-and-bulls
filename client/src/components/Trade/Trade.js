import React, { Component } from 'react';
import { Button, FormControl, HelpBlock } from 'react-bootstrap'
import stocksActionCreators from '../../actions/stocksActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Trade extends Component {

    constructor 
    state = {
        // action: "",
        // symbol: "",
        // price: "",
        quantity: 0,
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("posting trade")
        const url = "/api/user/" + props.id + "/trade"
        const data = {
            symbol: this.state.symbol,
            purchase_price: this.state.price,
            stock_count: this.state.quantity
        }
    }
}

function mapStateToProps(state) {
    return {
      id: user.id,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      stocksActions: bindActionCreators(stocksActionCreators, dispatch),
      
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Trade);
  
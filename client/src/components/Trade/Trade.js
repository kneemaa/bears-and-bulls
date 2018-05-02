import './Trade.css'
import React, { Component } from 'react';
import { Tabs, Tab, Button, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'
import stocksActionCreators from '../../actions/stocksActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { query } from '../Search/Search'

class Trade extends Component {
  state = {
      key: 1,
      qty: 0,
      symbol: ''
  }

  constructor(props, context) {
    super(props, context)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect = (key) => {
    this.setState({key})
  }

  handleChangeSymbol = (event) => {
    this.setState({symbol: event.target.value})
  }

  handleChangeQTY = (event) => {
    this.setState({qty: event.target.value})
  }

  validateSymbol = () => {
    if (this.state.symbol.length) {
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
      <div className='tradeComponent'>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="trade-pane">
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
            <Button>Buy!</Button>
          </Tab>
          <Tab eventKey={2} title="Sell Stocks">
            Tab 2 content
          </Tab>
        </Tabs>
      </div>)
}
}

export default Trade
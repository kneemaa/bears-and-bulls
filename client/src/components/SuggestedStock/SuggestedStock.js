import React, { Component } from 'react'

import './SuggestedStock'


class SuggestedStock extends Component {
	
	constructor(props) {
		super(props)
	}


	render() {
		return (
			<div>
				<img src={this.props.logo}></img>
				<p>{this.props.price}</p>
				<p>{this.props.symbol}</p>
				<div>{this.props.detailButton}</div>
				<div>{this.props.buyButton}</div>
			</div>)
	}
}

export default SuggestedStock

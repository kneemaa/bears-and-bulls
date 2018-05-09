import React, { Component } from 'react'

import './SuggestedStock'


class SuggestedStock extends Component {


	render() {
		return (
			<div>
				<img src={this.props.logo} alt={this.props.alt}></img>
				<p>{this.props.price}</p>
				<p>{this.props.symbol}</p>
				<div>{this.props.detailButton}</div>
				<div>{this.props.buyButton}</div>
			</div>)
	}
}

export default SuggestedStock
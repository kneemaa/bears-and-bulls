import React, { Component } from 'react';
import './Pills.css';

class Pills extends Component {
	render(){
		let { portfolio, historyTab, search } = '';
		switch (this.props.active) {
			case 'search':
			search = 'active';
			break;

			case 'history':
			historyTab = 'active';
			break;

			default:
			portfolio = 'active';
		}
		return(
			<ul className="nav pills">
				<li className={`nav-item text-center ${portfolio}`}>
				<a className="nav-link waves-light" href="/"><i className="fa fa-user fa-2x"></i><br/>Portfolio</a>
				</li>
				<li className={`nav-item text-center ${historyTab}`}>
				<a className="nav-link waves-light" href="/history"><i className="fa fa-history fa-2x"></i><br/>History</a>
				</li>
				<li className={`nav-item text-center ${search}`}>
				<a className="nav-link waves-light" href="/search"><i className="fa fa-shopping-cart fa-2x"></i><br/>Trade</a>
				</li>
			</ul>
		)}
}
export default Pills;
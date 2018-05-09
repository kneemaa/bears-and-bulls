import React, { Component } from 'react';
import './Pills.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap'

class Pills extends Component {
	render(){
		// let { portfolio, historyTab, search } = '';
		// switch (this.props.active) {
		// 	case 'search':
		// 	search = 'active';
		// 	break;
		//
		// 	case 'history':
		// 	historyTab = 'active';
		// 	break;
		//
		// 	default:
		// 	portfolio = 'active';
		// }

		return(
			<div className="pills container">
				<Nav>
					<LinkContainer to='/' className={`nav-item text-center`}>
						<NavItem><i className="fa fa-user fa-2x"></i><br/><p>Portfolio</p></NavItem>
					</LinkContainer>
					<LinkContainer to='history' className={`nav-item text-center`}>
						<NavItem><i className="fa fa-history fa-2x"></i><br/><p>History</p></NavItem>
					</LinkContainer>
					<LinkContainer to='search' className={`nav-item text-center`}>
						<NavItem><i className="fa fa-shopping-cart fa-2x"></i><br/><p>Trade</p></NavItem>
					</LinkContainer>
				</Nav>
			</div>
		)}
}
export default Pills

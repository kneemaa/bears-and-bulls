import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import './Navbar.css'

class Navbar extends Component {




	render() {
		return (
			<div className='container'>
				<p className='navbar-brand'>Bears and Bulls</p>
				<div className='collapse navbar-collapse justify-content-between' id='menubar'>
					<form className='form-inline md-form form-sm'>
						<a href='' id='menu-search'></a>
						<div className='waves-input-wrapper waves-effect waves-light'>
						<input id='menu-search-input' className='form-control form-control-sm' type='text' placeholder='Search Stock' aria-label='Search'></input>
						</div>
					</form>
					<Nav className='navbar-nav' bsStyle="pills">
						<NavItem>Home</NavItem>
						<NavItem>My Account</NavItem>
						<NavItem>Logout</NavItem>
					</Nav>
				</div>
			</div>)
	}
}

export default Navbar
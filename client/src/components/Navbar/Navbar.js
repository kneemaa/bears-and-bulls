import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import './Navbar.css'
import Auth from '../Auth/Auth.js'



class Navbar extends Component {

	state = {
		searchKey: ''
	}

	handleChange = event => {
		this.setState({searchKey: event.target.value})
	}

	handleSubmit = event => {
		event.preventDefault()
		//need to send the searchKey as a prop to the search.js component
	}

	login = () => {
		const auth = new Auth()
		auth.login()
	}
	


	render() {
		console.log(this.state)
		return (
			<div className='container'>
				<p className='navbar-brand'>Bears and Bulls</p>
				<div className='collapse navbar-collapse justify-content-between' id='menubar'>
					<form className='form-inline md-form form-sm' onSubmit={this.handleSubmit}>
						<a href='' id='menu-search' onClick={this.handleSubmit}></a>
						<div className='waves-input-wrapper waves-effect waves-light'>
						<input onChange={this.handleChange} id='menu-search-input' className='form-control form-control-sm' type='text' placeholder='Search Stock' aria-label='Search'></input>
						</div>
					</form>
					<Nav className='navbar-nav' bsStyle="pills">
						<NavItem>Home</NavItem>
						<NavItem onClick={this.login}>My Account</NavItem>
						<NavItem>Logout</NavItem>
					</Nav>
				</div>
			</div>)
	}
}

export default Navbar
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Nav, NavItem, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
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
		this.props.history.push(`/search/${this.state.searchKey}`)
		window.location.reload()
	}

	login = () => {
		const auth = new Auth()
		auth.login()
	}


	logout = () => {
    	this.props.auth.logout()
  	}


	render() {
		const { isAuthenticated } = this.props.auth
		return (
			<div className='container'>
				<p className='navbar-brand'>Bears and Bulls</p>
				<div className='collapse navbar-collapse justify-content-between' id='menubar'>
					<form className='form-inline md-form form-sm' onSubmit={this.handleSubmit}>
						{/*<a href='' id='menu-search' onClick={this.handleSubmit}></a>*/}
						<div className='waves-input-wrapper waves-effect waves-light'>
						<input onChange={this.handleChange} id='menu-search-input' className='form-control form-control-sm' type='text' placeholder='Search Stock' aria-label='Search'></input>
						</div>
					</form>
					<Nav className='navbar-nav' bsStyle="pills">
						<LinkContainer to='/'>
							<NavItem>Home</NavItem>
						</LinkContainer>
						<LinkContainer to='/profile'>
							<NavItem>My Account</NavItem>
						</LinkContainer>
						<NavItem>{
				              !isAuthenticated() && (
				                  <Button
				                    bsStyle="primary"
				                    className="btn-margin"
				                    onClick={this.login.bind(this)}
				                  >
				                    Log In
				                  </Button>
				                )
				            }
				            {
				              isAuthenticated() && (
				                  <Button
				                    bsStyle="primary"
				                    className="btn-margin"
				                    onClick={this.logout.bind(this)}
				                  >
				                    Log Out
				                  </Button>
				                )
				            }
				        </NavItem>
					</Nav>
				</div>
			</div>)
	}
}

export default withRouter(Navbar)

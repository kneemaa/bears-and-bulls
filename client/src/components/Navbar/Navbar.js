import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Nav, NavItem, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './Navbar.css'
import Auth from '../Auth/Auth.js'
import * as userActionCreators from "../../actions/userActions"
import * as searchActionCreators from '../../actions/searchActions'
import * as stocksActionCreators from '../../actions/stocksActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import history from '../Auth/History'


function mapStateToProps(state) {
  return {
    user: state.user.email,
    search: state.search,
    stocks: state.stocks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActionCreators, dispatch),
    searchActions: bindActionCreators(searchActionCreators, dispatch),
    stocksActions: bindActionCreators(stocksActionCreators, dispatch),
  };
}

class Navbar extends Component {

	state = {
		searchKey: ''
	}

	componentWillMount() {
		this.props.user.email && this.props.stocksActions.getPortfolio(this.props.user.email)
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;

        if (!userProfile) {
        	if (localStorage.getItem('access_token')) {
				getProfile((err, profile) => {
					this.setState({ profile });
					this.props.userActions.getUser(profile['email'])
				})
			}
        } else {
          this.setState({ profile: userProfile });
        }
    }

	handleChange = event => {
		this.setState({searchKey: event.target.value})
	}

	handleSubmit = event => {
		event.preventDefault()
		let searchKey = this.state.searchKey.trim().toUpperCase()
		this.props.searchActions.query(searchKey)
		history.push('/search')
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
			<div className='container custom-navbar-container'>
				<p className='navbar-brand'>Bears and Bulls</p>
				<div className='collapse navbar-collapse justify-content-between' id='menubar'>
					<form className='custom-navbar-form' onSubmit={this.handleSubmit}>
						{/*<a href='' id='menu-search' onClick={this.handleSubmit}></a>*/}
						<div className='waves-input-wrapper waves-effect waves-light'>
						<input onChange={this.handleChange} id='menu-search-input' className='form-control form-control-sm' type='text' placeholder='Search Stock' aria-label='Search'></input>
						</div>
					</form>
					<Nav className='custom-navbar-nav' bsStyle="pills">
						<LinkContainer to='/'>
							<NavItem className="custom-navbar-link">Home</NavItem>
						</LinkContainer>
						<LinkContainer to='/search'>
							<NavItem className="navbar-link">Search</NavItem>
						</LinkContainer>
						<LinkContainer to='/trade'>
							<NavItem className="navbar-link">Trade</NavItem>
						</LinkContainer>
						<NavItem className="navbar-link">{
				              !isAuthenticated() && (
				                  <Button
				                    bsStyle="primary"
				                    className="btn-margin login-btn"
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
				                    className="btn-margin logout-btn"
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))

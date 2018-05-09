import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { Button } from "react-bootstrap";
import "./Navbar.css"
import Auth from "../Auth/Auth.js"
import * as searchActionCreators from "../../actions/searchActions"
import * as stocksActionCreators from "../../actions/stocksActions"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import history from "../Auth/History"


function mapStateToProps(state) {
  return {
    user: state.user.email,
    search: state.search,
    stocks: state.stocks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchActions: bindActionCreators(searchActionCreators, dispatch),
    stocksActions: bindActionCreators(stocksActionCreators, dispatch),
  };
}

class Navbar extends Component {

	state = {
		searchKey: ""
	}

	handleChange = event => {
		this.setState({searchKey: event.target.value})
	}

	handleSubmit = event => {
		event.preventDefault()
		let searchKey = this.state.searchKey.trim().toUpperCase()
		this.props.searchActions.query(searchKey)
		history.push("/search")
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
			<div className="navbar fixed-top">
				<div className="container">

					<div className="branding col-lg-3 col-md-6 col-sm-12"><h1>Bears and Bulls</h1></div>

					<form className="col-lg-3 col-md-6 col-sm-12" onSubmit={this.handleSubmit}>
						{/*<a href="" id="menu-search" onClick={this.handleSubmit}></a>*/}
							<input onChange={this.handleChange} id="menu-search-input" className="form-control form-control-sm" type="text" placeholder="Search Stock" aria-label="Search"></input>
          </form>

					<div className="links col-lg-6 col-md-12 col-sm-12">
						<a className="nav-link" to="/">Home</a>
						<a className="nav-link" to="/search">Search</a>
						<a className="nav-link" to="/trade">Trade</a>
						<a className="nav-link">{
				              !isAuthenticated() && (
				                  <Button
				                    bsStyle="info"
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
				      </a>
          </div>

				</div>
			</div>)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))

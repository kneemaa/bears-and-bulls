import React from "react";
import { connect } from 'react-redux';
import './MyAccount.css';

const MyAccount = (props) => {
    return props.user.id ? (
		<div className="container myAccount">
			<div className="row">
				<div className="col-4">
					<h3>My Account</h3>
					<p>{props.user.firstName} {props.user.lastName}</p>
				</div>
				<div className="col-4 text-right">
					<p>Available Balance</p> <h5>{props.user.accountBalance}</h5>
				</div>
				<div className="col-4 text-right">
					<p>Portfolio Value</p> <h5>{props.stocks.portfolioValue}</h5>
				</div>
			</div>
		</div>
    ) : (<div></div>)
}


function mapStateToProps(state) {
    return {
      user: state.user,
      stocks: state.stocks
    };
  }
//   function mapDispatchToProps(dispatch) {
//     return {
//       stocksActions: bindActionCreators(stocksActionCreators, dispatch),

//     };
//   }

  export default connect(mapStateToProps)(MyAccount);
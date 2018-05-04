import React from "react";
import { connect } from 'react-redux';

const MyAccount = (props) => {
    return props.user.id ? (
        <div>
            <h3>My Account</h3>
            <p>{props.user.firstName} {props.user.lastName}</p>
            <p>Available Balance: {props.user.accountBalance}</p>
            <p>Portfolio Value: {props.stocks.portfolioValue}</p>
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
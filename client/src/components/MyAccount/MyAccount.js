import React from "react";
import { connect } from 'react-redux';

const MyAccount = (props) => {
    return (
        <div>
            <h3>My Account</h3>
            <p>{props.user.firstName} {props.user.lastName}</p>
            <p>Available Balance: {props.user.accountBalance}</p>
            <p>Portfolio Value: {props.user.portfolioValue}</p>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      user: state.user,
    };
  }
//   function mapDispatchToProps(dispatch) {
//     return {
//       stocksActions: bindActionCreators(stocksActionCreators, dispatch),
      
//     };
//   }
  
  export default connect(mapStateToProps)(MyAccount);
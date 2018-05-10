import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import loading from './loading.svg';
import { setIdToken, setAccessToken } from '../../utils/AuthService';
import * as userActionCreators from "../../actions/userActions"
import * as stocksActionCreators from "../../actions/stocksActions"
import { connect } from "react-redux"
import { bindActionCreators} from "redux"

class Callback extends Component {

  componentDidMount() {
    setAccessToken();
    setIdToken();

    this.props.auth.getProfile((err, user) => {
      if (err) {
        console.log(err)
      }
      this.props.userActions.getUser(user);
      this.props.history.push("/");
    })
    
  }

  render() {
    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    }

    return (
      <div style={style}>
        <img src={loading} alt="loading"/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.email,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActionCreators, dispatch),
    stocksActions: bindActionCreators(stocksActionCreators, dispatch),
  };
}
const routedCallback = withRouter(Callback);
export default connect(mapStateToProps, mapDispatchToProps)(routedCallback)
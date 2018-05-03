import React, { Component } from "react";
import BarChart from "../BarChart/BarChart.js"
import PieChart from "../PieChart/PieChart.js"
import * as userActionCreators from "../../actions/userActions"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SuggestedStock from "../SuggestedStock/SuggestedStock.js"
import MyStocks from "../MyStocks/MyStocks.js"

function mapStateToProps(state) {
  return {
    user: state.user.email,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActionCreators, dispatch),
    
  };
}

class Portfolio extends Component {
    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        console.log(this.props.auth)

        if (!userProfile) {
          getProfile((err, profile) => {
            this.setState({ profile });
            console.log(profile['email'])
            this.props.userActions.getUser(profile['email'])
          });
        } else {
          this.setState({ profile: userProfile });
        }
    }

    render() {
        return(
        <div>
            {/* <Pills />  */}
            <div>
                <h1 className = "heading">Portfolio</h1>
            </div>
            <div>
                <BarChart symbol = "IBM" style={{height:400, width:'100%'}}/>
                <PieChart style={{height:400, width:400}} />                
                <MyStocks />
                <SuggestedStock />
            </div>
        </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)
import React, {} from 'react'
import * as contestActionCreators from "../../actions/contestActions"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const Contests = (props) => {
	props.contestActions.query_getGlobalContestants()
	return (<div>contests</div>)
}


function mapStateToProps(state) {
    return {
      contests: state.contests,
    };
  }
function mapDispatchToProps(dispatch) {
	return {
	  contestActions: bindActionCreators(contestActionCreators, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Contests)
import React, {Component} from 'react'
import * as contestActionCreators from "../../actions/contestActions"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Moment from 'react-moment'

class Contests extends Component {
	componentWillMount() {
		this.props.contestActions.query_getGlobalContestants()
	}
	
	render() { 
		return (
		<div>
			<table className="table table-hover mt-5 show-hide">
				<thead>
					<tr>
						<th>Rank</th>
						<th>User</th>
						<th>Last Login</th>
						<th>Percentage Growth</th>
					</tr>
				</thead>
				<tbody>
				{(this.props.contests.global).map((entry, index) => {
					return (
						<tr key={entry.user}>
							<th>{index + 1}</th>
							<th>{entry.user}</th>
							<th><Moment format="MM/DD/YYYY">{entry.last_login}</Moment></th>
							<th>{entry.average_growth * 10}%</th>
						</tr>)

				})}
				</tbody>
			</table>
		</div>)}
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
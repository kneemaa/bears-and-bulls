import './Competitions.css'
import React from 'react'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
      stocks: state.stocks,
      user: state.user
    };
}

function iWillRun() {
	console.log('i ran')
}



const Competitions = (props) => {
	iWillRun()
	return (
		<table className="table table-hover mt-5 show-hide">
			<thead>
				<tr>
					<th>Rank</th>
					<th>User</th>
					<th>Growth (Total %)</th>
					<th>Growth (Total $)</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>1</th>
				</tr>
			</tbody>
		</table>
		)
}

export default connect(mapStateToProps)(Competitions)

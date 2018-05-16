import React, { Component } from "react";
import BarChart from "../BarChart/BarChart.js"
import PieChart from "../PieChart/PieChart.js"
import MyStocks from "../MyStocks/MyStocks.js"
import * as stocksActionCreators from "../../actions/stocksActions"
import * as chartActionCreators from "../../actions/chartActions"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Portfolio.css';



class Portfolio extends Component {

    render() {
        console.log(this.props)
        return(
        <div>
            <div className="row">
                <h1 className = "heading">Portfolio</h1>
            </div>
            <div className="row">
				<div className="col-lg-8 col-md-8 col-sm-12">
					<BarChart  symbol = {this.props.charted} style={{height:400, width:'100%'}}/>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-12">
					<PieChart style={{height:400, width:'100%'}} />
				</div>
			</div>
			<div className="row">
                <MyStocks />
            </div>
        </div>
        )
    }
}


function mapStateToProps(state) {
    return {  
      charted: state.charted,
    //   stocks: state.stocks
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      stocksActions: bindActionCreators(stocksActionCreators, dispatch),
      chartActions: bindActionCreators(chartActionCreators, dispatch),

    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);

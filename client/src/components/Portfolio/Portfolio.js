import React, {Component} from "react";
import BarChart from "../BarChart/BarChart.js"
import SuggestedStock from "../SuggestedStock/SuggestedStock.js"
// import CircleChart from "../CircleChart/CircleChart.js"
// import MyStocks from "../MyStocks/MyStocks.js"


class Portfolio extends Component {
    state = {
        userStocks: ["appl", "snap", 'x'],
        chartedStock: ""
    }

    componentDidMount() {
        // this.openWebSocket()
    }
   
    render() {
        return(
        <div>
            {/* <Pills />  */}
            <div>
                <h1 className = "heading">Portfolio</h1>
            </div>
            <div>
                <BarChart symbol = "aapl" style={{height:400, width:'100%'}}/>
                {/* <CircleChart /> */}
                {/* <MyStocks /> */}
                <SuggestedStock />
            </div>
        </div>
        )}
}

export default Portfolio
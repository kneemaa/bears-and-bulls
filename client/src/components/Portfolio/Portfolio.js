import React, { Component } from "react";
import BarChart from "../BarChart/BarChart.js"
import PieChart from "../PieChart/PieChart.js"

import SuggestedStock from "../SuggestedStock/SuggestedStock.js"
import MyStocks from "../MyStocks/MyStocks.js"


class Portfolio extends Component {
    
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


export default Portfolio
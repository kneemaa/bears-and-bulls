<<<<<<< HEAD
import React, {Component} from "react";
=======
import React from "react";
>>>>>>> 4cfd202eebdbad5dfc0c5c9e8ebbbb93d64cd2d0
import BarChart from "../BarChart/BarChart.js"
import PieChart from "../PieChart/PieChart.js"

import SuggestedStock from "../SuggestedStock/SuggestedStock.js"
// import MyStocks from "../MyStocks/MyStocks.js"


<<<<<<< HEAD
class Portfolio extends Component {
    state = {
        userStocks: ["appl", "snap", 'x'],
        chartedStock: ""
    }

    componentDidMount() {
        // this.openWebSocket()
    }

    render() {
=======
const Portfolio = () => {
>>>>>>> 4cfd202eebdbad5dfc0c5c9e8ebbbb93d64cd2d0
        return(
        <div>
            {/* <Pills />  */}
            <div>
                <h1 className = "heading">Portfolio</h1>
            </div>
            <div>
                <BarChart symbol = "IBM" style={{height:400, width:'100%'}}/>
                <PieChart style={{height:400, width:400}} />
                {/* <MyStocks /> */}
                <SuggestedStock />
            </div>
        </div>
        )
}

export default Portfolio
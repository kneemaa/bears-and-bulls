import React, {Component} from "react";

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
                {/* <BarChart />
                <CircleChart />
                <MyStocks />
                <SuggestedStocks /> */}
            </div>
        </div>
        )}
}

export default Portfolio
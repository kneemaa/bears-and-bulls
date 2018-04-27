import React, {Component} from "react";

class Search extends Component {
    state = {
        stocks: ["appl", "snap", 'x']
    }

    componentDidMount() {
        // this.openWebSocket()
    }
   
    render() {
        return(
        <div>
            <div>
                <h1 className = "heading">Portfolio</h1>
            </div>
            <div>
                <BarChart />
                <CircleChart />
            </div>
        </div>
        )}
}
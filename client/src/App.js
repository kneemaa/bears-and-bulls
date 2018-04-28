import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { Button } from 'react-bootstrap'
// import Portfolio from "./components/Portfolio/Portfolio.js"
// import TradeHistory from "./components/TradeHistory/TradeHistory.js"
// import Trade from "./components/Trade/Trade.js"
import Search from "./components/Search/Search.js"
import SuggestedStock from "./components/SuggestedStock/SuggestedStock.js"
import Navbar from "./components/Navbar/Navbar.js"
// import Footer from "./components/Footer/Footer.js"

import BarChart from './components/barChart/chart.js';

const App = () =>
    <Router>
    <div>
        <Navbar/>
        <div>
          <h1>Hellooooo, Stocks App...Build in Progress</h1>
        </div>
      {/* <Nav /> */}
      {/* <UserData /> */}
	  	<h2>Hey, I am a portfolio chart waiting for relocation and resizing. <br/>It may take a few second to load me.</h2>
	  	<BarChart
			symbol='IBM'
			style={{height:400, width:'100%'}}
		/>
      <Switch>
        {/* <Route exact path="/" component={Portfolio} />
        <Route exact path="/history" component={TradeHistory} />
        <Route exact path="/trade" component={Trade} />
        <Route exact path="/search" component={Search} /> */}
      </Switch>
      {/* <Footer /> */}
    </div>
  </Router>;

export default App;


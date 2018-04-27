import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { Button } from 'react-bootstrap'
// import Portfolio from "./components/Portfolio/Portfolio.js"
// import TradeHistory from "./components/TradeHistory/TradeHistory.js"
// import Trade from "./components/Trade/Trade.js"
import Search from "./components/Search/Search.js"
// import Nav from "./components/Nav/Nav.js"
// import Footer from "./components/Footer/Footer.js"




const App = () =>
    <Router>
    <div>
        <div>
          <h1>Hellooooo, Stocks App...Build in Progress</h1>
        </div>
        <Search/>
      {/* <Nav /> */}
      {/* <UserData /> */}
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


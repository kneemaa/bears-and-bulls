import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Button } from 'react-bootstrap'
import Portfolio from "./components/Portfolio/Portfolio.js"
// import TradeHistory from "./components/TradeHistory/TradeHistory.js"
// import Trade from "./components/Trade/Trade.js"
import Search from "./components/Search/Search.js"
import SuggestedStock from "./components/SuggestedStock/SuggestedStock.js"
//import Navbar from "./components/Navbar/Navbar.js"
// import Footer from "./components/Footer/Footer.js"

import BarChart from './components/BarChart/BarChart.js';
import PieChart from './components/PieChart/PieChart.js';


class App extends Component {


  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  

  render() {
    const { isAuthenticated } = this.props.auth

    return (
      <Router>
        <div>
            {/*<Navbar
              onClick={!isAuthenticated() ? (this.login.bind(this) 
                ) : (
                    this.logout.bind(this)
                  )
              }
            />*/}
          
            <div>
              <Navbar fluid>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#">Auth0 - React</a>
                  </Navbar.Brand>
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'home')}
                  >
                    Home
                  </Button>
                  {
                    !isAuthenticated() && (
                        <Button
                          bsStyle="primary"
                          className="btn-margin"
                          onClick={this.login.bind(this)}
                        >
                          Log In
                        </Button>
                      )
                  }
                  {
                    isAuthenticated() && (
                        <Button
                          bsStyle="primary"
                          className="btn-margin"
                          onClick={this.logout.bind(this)}
                        >
                          Log Out
                        </Button>
                      )
                  }
                </Navbar.Header>
              </Navbar>
            </div>
          

            









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
        <h2>I am a sample pie chart.</h2>
        <PieChart style={{height:400, width:400}} />
          <Switch>
            <Route exact path="/" component={Portfolio} />
            {/* <Route exact path="/history" component={TradeHistory} />
            <Route exact path="/trade" component={Trade} /> */}
            <Route exact path="/search" component={Search} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
      )
  }
}

    

export default App;


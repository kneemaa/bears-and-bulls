import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Callback from './components/Callback/Callback';
import Auth from './components/Auth/Auth';
import history from './components/Auth/History';
import Navbar from './components/Navbar/Navbar'
import LedgerHistory from './components/LedgerHistory/LedgerHistory'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
import Portfolio from './components/Portfolio/Portfolio'
import MyAccount from './components/MyAccount/MyAccount'
import Pills from './components/Pills/Pills'
import './style.css'

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {

  return (
<<<<<<< HEAD
    <Router history={history}>
      <div>
        <div id="user">
          <Navbar auth={auth} />
          <MyAccount auth ={auth} />
          <Pills />
        </div>
        <div className="container" id="main">
=======
        <Router history={history}>
        <div>
          <Navbar auth={auth}/>
          <MyAccount auth={auth} />
>>>>>>> 2e048bce92a5847d68af0ac0da296c2f46b121b9
          <Route exact path="/" render={(props) => <Portfolio auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/history" render={(props) => <LedgerHistory {...props} />} />
          <Route path="/profile" render={(props) => <Profile auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props)
            return <Callback auth={auth} {...props} />}} />
          <Route exact path="/search" render={(props) =>  <Search auth={auth} {...props}/>}/>
          <Route path="/search/:symbol" render={(props) => <Search auth={auth} {...props}/> }/>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

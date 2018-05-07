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
import Competitions from './components/Competitions/Competitions'

const auth = new Auth();

export const makeMainRoutes = () => {

  return (
        <Router history={history}>
        <div>
          <Navbar auth={auth} />
          <MyAccount auth ={auth} />
          <Route exact path="/" render={(props) => <Portfolio auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/history" render={(props) => <LedgerHistory {...props} />} />
          <Route path="/profile" render={(props) => <Profile auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => <Callback auth={auth} {...props} />} />
          <Route exact path="/search" render={(props) =>  <Search auth={auth} {...props}/>}/>
          <Route path="/competitions" render={(props) => <Competitions auth={auth} {...props}/>}/>
          <Footer/>
        </div>
      </Router>
  );
}

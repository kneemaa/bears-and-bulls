import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Callback from './components/Callback/Callback';
import Auth from './components/Auth/Auth';
import history from './components/Auth/History';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
import Portfolio from './components/Portfolio/Portfolio'
import Trade from './components/Trade/Trade'

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {

  return (

      <Router history={history}>
        <div>
          <Route exact path="/" render={(props) => 
                  <div>
                    <Navbar auth={auth} {...props} />
                    <Portfolio  {...props} />
                    <Footer/>
                  </div>} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/profile" render={(props) => <Profile auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => { 
            handleAuthentication(props)
            return <Callback {...props} /> }}/>
          <Route exact path="/search" render={(props) => 
                  <div>
                    <Navbar auth={auth} />
                    <Search {...props}/>
                    <Footer/>
                  </div> }/>
          <Route path="/search/:symbol" render={(props) => 
                  <div>
                    <Navbar auth={auth} />
                    <Search {...props}/>
                    <Footer/>
                  </div> }/>
          <Route exact path="/trade" render={(props) =>
                  <div>
                    <Navbar auth={auth} />
                    <Trade {...props}/>
                    <Footer/>
                  </div>}/>
        </div>
      </Router>
  );
}

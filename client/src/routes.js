import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Callback from './components/Callback/Callback';
import Auth from './components/Auth/Auth';
import history from './components/Auth/History';
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'

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
                  </div>} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => { 
            handleAuthentication(props)
            return <Callback {...props} /> }}/>
          <Route exact path="/search" render={(props) => 
                  <div>
                    <Navbar auth={auth} />
                    <Search {...props}/>
                  </div> }/>
          <Route path="/search/:symbol" render={(props) => 
                  <div>
                    <Navbar auth={auth} />
                    <Search {...props}/>
                  </div> }/>
          
        </div>
      </Router>
  );
}

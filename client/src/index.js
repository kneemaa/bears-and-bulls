import React from 'react';
<<<<<<< HEAD
import { Provider } from 'react-redux';
=======
import { Provider } from 'react-redux'
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
>>>>>>> 4cfd202eebdbad5dfc0c5c9e8ebbbb93d64cd2d0

import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store'

const store = configureStore()
const routes = makeMainRoutes()


ReactDOM.render(
	<Provider store={store}>
	  { routes } 
	</Provider>,
	document.getElementById('root'),
	);
	registerServiceWorker();

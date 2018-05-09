import React from 'react';
import { Provider } from 'react-redux'
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store'
import './style.css'

const store = configureStore()
const routes = makeMainRoutes()


ReactDOM.render(
	<Provider store={store}>
	  { routes }
	</Provider>,
	document.getElementById('root'),
	);
	registerServiceWorker();

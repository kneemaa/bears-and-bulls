import React from 'react';
import { Provider } from 'react-redux'
import 'core-js/es6/map'
import 'core-js/es6/set'

import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store'
import './style.css'

global.requestAnimationFrme = function(callback) {
    setTimeout(callback, 0);
}
const store = configureStore()
const routes = makeMainRoutes()


ReactDOM.render(
	<Provider store={store}>
	  { routes }
	</Provider>,
	document.getElementById('root'),
	);
	registerServiceWorker();

import React from 'react';
import { Provider } from 'react-redux'

import ReactDOM from 'react-dom';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store'
const store = configureStore();


ReactDOM.render(
<Provider store = {store}>
    <App />
</ Provider>,
document.getElementById('root'),
);
registerServiceWorker();

import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { reducer } from './reducers';   //not done routing, nothing in reducers yet
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk));
window.reduxStore = store;

ReactDOM.render(
      <Provider store={store}>
            <App />
      </Provider>, 
document.getElementById('root'));


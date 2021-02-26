import NavBar from './components/navBar'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import otherMiddleware from 'other-middleware';
import thunk from 'redux-thunk'
import reducer from './reducers/reducer';

import logger from 'redux-logger'

const store = createStore(reducer, compose(
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

ReactDOM.render(
  // <React.StrictMode>

    <Provider store={store}>
      <NavBar />
      <App />
    </Provider>,

  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

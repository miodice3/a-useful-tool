import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';

import thunk from 'redux-thunk'
import rootReducer from './reducers/reducer';

import logger from 'redux-logger'

// import { createStore, applyMiddleware, compose } from 'redux';
// const store = createStore(rootReducer, compose(
//   applyMiddleware(thunk, logger),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// )

// FOR DEVELOPMENT, TEST ADD ROOTREDUCER
import { createStore, applyMiddleware } from 'redux';
const store = createStore(rootReducer, applyMiddleware(thunk, logger))
// const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(

    <Provider store={store}>
      <App /> 
    </Provider>,

  document.getElementById('root')
);
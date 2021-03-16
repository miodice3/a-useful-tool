import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducers/reducer';

import logger from 'redux-logger'

// const store = createStore(reducer, compose(
//   applyMiddleware(thunk, logger),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// )
//FOR DEVELOPMENT, TEST ADD ROOTREDUCER

const store = createStore(reducer, applyMiddleware(thunk, logger))
// const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(

    <Provider store={store}>
      <App /> 
    </Provider>,

  document.getElementById('root')
);
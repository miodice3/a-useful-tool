import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';

import thunk from 'redux-thunk'
import rootReducer from './reducers/reducer';

import { createStore, applyMiddleware, compose } from 'redux';
const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

ReactDOM.render(

    <Provider store={store}>
      <App /> 
    </Provider>,

  document.getElementById('root')
);
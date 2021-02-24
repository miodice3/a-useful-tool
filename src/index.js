import NavBar from './components/navBar'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, } from 'redux';
// import otherMiddleware from 'other-middleware';
import thunk from 'redux-thunk'
import reducer from './reducers/reducer';

// compose (
//   applyMiddleware(thunk, otherMiddleware()),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )

const store = createStore(reducer, applyMiddleware(thunk));



// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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

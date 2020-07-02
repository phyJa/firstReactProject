import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// We do not need this yet:
// import * as serviceWorker from './serviceWorker';
import Todos from './components/Todos';

ReactDOM.render(
  <React.StrictMode>
    <Todos /> 
  </React.StrictMode>,
  document.getElementById('root')
);
// The <App /> tag is actually App.js

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

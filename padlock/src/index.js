import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';


//importing redux store
import { Provider } from 'react-redux';
import store from './store/store';
import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import "shards-ui/dist/css/shards.min.css"

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
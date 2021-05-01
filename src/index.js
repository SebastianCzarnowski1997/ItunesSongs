import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import Store from './Store';
import {BrowserRouter} from 'react-router-dom'

// wrap app in react router and provider

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



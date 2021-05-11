import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';



ReactDOM.render(
  // use strict와 같은 역할
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


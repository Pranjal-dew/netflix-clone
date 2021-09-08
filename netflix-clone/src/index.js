import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar.js';
import Row from './Row.js';
import Banner from './Banner.js';

import itemData from './data/itemData';//Because we dont have backend right now

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Banner Data={itemData}/>
    <Row RowTitle="Recently Watched" Data={itemData} isLarge/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());

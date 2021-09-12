import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Detail from './Detail'
import Homepage from './Homepage.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './navbar.js';
import Footer from './Footer'
import Login from './Login'
import Profile from './Profile'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Switch>
        <Route exact path="/" exact component={Homepage} />
        <Route path="/detail" component={Detail} />
        <Route path="/login" component={Login} />
        <Route path='/profile' component={Profile}/>
      </Switch>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Detail from './Detail'
import Homepage from './Homepage.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './navbar.js';
import Footer from './Footer'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Profile from './Profile'
import ErrorPage from './ErrorPage'

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/" exact component={Homepage} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path='/profile' component={Profile} />
        <Route component={ErrorPage} />

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

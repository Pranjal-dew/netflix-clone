import React from 'react'
import Navbar from './navbar.js';
import Footer from './Footer'
import Homepage from './Homepage.js';
import Detail from './Detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Viewer() {
    return (
        <div>
            <Navbar />
            <Router>
                <Switch>
                    <Homepage />
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

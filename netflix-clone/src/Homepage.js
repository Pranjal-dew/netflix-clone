import { Container } from '@material-ui/core'
import React from 'react'
import Navbar from './navbar.js';
import Row from './Row.js';
import Banner from './Banner.js';
import App from './App.js';
import itemData from './data/itemData';//Because we dont have backend right now

function Homepage() {
    return (
        <div>
            <Navbar/>
            <Container>
            <Banner Data={itemData}/>
            <Row RowTitle="Recently Watched" Data={itemData} isLarge/>
            <App RowTitle="Recently Watched" Data={itemData} isLarge/>
            </Container>
        </div>
    )
}

export default Homepage

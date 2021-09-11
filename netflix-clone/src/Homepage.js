import { Container } from '@material-ui/core'
import React from 'react'
import Row from './Row.js';
import Banner from './Banner.js';
import itemData from './data/itemData';//Because we dont have backend right now


function Homepage() {
    return (
        <Container>
                <Banner Data={itemData} />
                <Row RowTitle="Recently Watched" Data={itemData} isLarge id="row-1" />
                <Row RowTitle="Popular" Data={itemData} id="row-2" />
                <Row RowTitle="Comedy" Data={itemData} id="row-3" />
                <Row RowTitle="Horror" Data={itemData} isLarge id="row-4" />
                <Row RowTitle="Documentary" Data={itemData} id="row-5" />
                <Row RowTitle="Action" Data={itemData} isLarge id="row-6" />
                <Row RowTitle="Adventure" Data={itemData} id="row-7" />
                <Row RowTitle="Mystery" Data={itemData} isLarge id="row-8" />
                <Row RowTitle="Anime" Data={itemData} isLarge id="row-9" />
                {/* <RowDevendra RowTitle="Recently Watched" Data={itemData} isLarge id="row-4"/> */}
            </Container>
    )
}

export default Homepage
// import ReactDOM from 'react-dom';
// import React, { Component } from 'react';
// import Kennel from './components/Kennel';

// ReactDOM.render(<Kennel />, document.querySelector("#root"));

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from './components/Kennel'
import './index.css'


ReactDOM.render(
    <Router>
        <Kennel />
    </Router>
    , document.getElementById('root'))
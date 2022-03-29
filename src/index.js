import React from 'react';
import ReactDOM from 'react-dom'
import Header from './components/Header'
import {Body} from './components/Body'
import './index.css'

ReactDOM.render(
    <>
        <Header />
        <Body />
    </>,
    document.getElementById('root')
)
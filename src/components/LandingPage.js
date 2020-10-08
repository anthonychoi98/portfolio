import { Component } from 'react';
import React from 'react'
import './LandingPage.css'
import IconList from './IconList.js';

export default class LandingPage extends Component {
    
    render() {
        return (
            <div className="landingpage">  
            <b><p style={{ fontSize:'200%'}}></p></b>
                <IconList></IconList>
            </div>
        );
    }
}






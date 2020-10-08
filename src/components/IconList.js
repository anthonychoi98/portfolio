import FolderIcon from './icons/FolderIcon.js';
import React, { Component } from 'react';
import GitHubIcon from './icons/GitHubIcon.js'
import LinkedInIcon from './icons/LinkedInIcon.js';
import AboutMe from './icons/AboutMe.js';
import SpotifyIcon from './icons/SpotifyIcon.js';
import NewsIcon from './icons/NewsIcon.js';

class IconList extends Component {

    constructor(){
        super();
    }

    render() {
        return(          
            <div className="IconList" style={{maxHeight:'70%', maxWidth:'75%'}}>
                <FolderIcon></FolderIcon>
                <AboutMe></AboutMe>
                <LinkedInIcon></LinkedInIcon>
                <GitHubIcon></GitHubIcon>
                <SpotifyIcon></SpotifyIcon>
                <NewsIcon></NewsIcon>
            </div>
        );
    }

}

export default IconList;
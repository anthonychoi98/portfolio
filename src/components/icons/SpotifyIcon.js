import { Component } from 'react';
import React from 'react'
import './SpotifyIcon.css'
import Modal from "../modals/Modal.js";
import Draggable from 'react-draggable';
import "xp.css/dist/XP.css";

let clicks = [];
let timeout;
class SpotifyIcon extends Component{

    constructor(props){
        super(props);
        this.state = {
            modal: false,
            modalInfo: "",
            tint: 'transparent',
            op: '100%'
          }
    }
  
    selectModal = (info) => {
        this.setState({
            modal: !this.state.modal,
            modalInfo: info
        })
    }

    handleMouseEnter = () =>{
        this.setState({op: '85%'});
    }

    handleMouseLeave = () => {
        this.setState({op:'100%'});
    }

    singleClick = (event) => {
        console.log(event);
        this.setState({tint: '#A9A9A9'});
        setTimeout(() => {
            this.setState({tint: 'transparent'});
       },4000);
   }

    doubleClick = (event) => {
        this.setState({tint: 'transparent'});
        window.open('https://whispering-caverns.herokuapp.com')
    }

    clickHandler = (event) => {
        event.persist()
        event.preventDefault();
        clicks.push(new Date().getTime());
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => {
            if (clicks.length > 1 && clicks[clicks.length - 1] - clicks[clicks.length - 2] < 250) {
                this.doubleClick(event.target);
                
            } else {
                this.singleClick(event.target);
            }
        }, 250);
    }

    render() {
        return (
            <>  
            <div className="spotifyicon">
                <Draggable
                    axis="both"
                    handle=".sicon"
                    defaultPosition={{x: 30, y: 25}}
                    position={null}
                    grid={[25, 25]}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    
                    <div className="sicon" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={{backgroundColor: this.state.tint, opacity: this.state.op}} onClick={this.clickHandler} alt="" ></div>
                                        
                    </Draggable>
                        <Modal 
                        displayModal={this.state.modal}
                        modalInfo={this.state.modalInfo}
                        closeModal={this.selectModal}/>       
            </div>
            </>
                
        );
    }
}

export default SpotifyIcon;
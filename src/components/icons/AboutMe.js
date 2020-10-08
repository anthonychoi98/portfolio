import { Component } from 'react';
import React from 'react'
import './AboutMe.css'
import Modal from "../modals/Modal.js";
import Draggable from 'react-draggable';
import "xp.css/dist/XP.css";

let clicks = [];
let timeout;
class AboutMe extends Component{

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
       },10000);
   }

    doubleClick = (event) => {
        this.setState({tint: 'transparent'});
        this.selectModal('Modal A');
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
            <div className="aboutme">
                <Draggable
                    axis="both"
                    handle=".aicon"
                    defaultPosition={{x: 30, y: 25}}
                    position={null}
                    grid={[25, 25]}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    
                    <div className="aicon" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={{backgroundColor: this.state.tint, opacity: this.state.op}} onClick={this.clickHandler} alt="" ></div>
                                        
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

export default AboutMe;
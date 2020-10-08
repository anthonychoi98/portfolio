import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './modal.css'
import ResumeModal from './ResumeModal.js'
import AboutMeModal from './AboutMeModal.js'
import "xp.css/dist/XP.css";

class Modal extends Component {

    constructor(props){
      super(props);
    }
  
    displayInfo () {
      switch(this.props.modalInfo) {    

        case 'Modal A':
          return (
            <AboutMeModal myProps={this.props}/>
          );
        
          case 'Modal B':
            return(
              <ResumeModal myProps={this.props}/>
          );
        default:
          return null
      }
    }

    render(){
      const divStyle = {
          display: this.props.displayModal ? 'block' : 'none'
      };

      return (
            <div className="modal" style={divStyle}>
              <div className="modal-content">
                  {this.displayInfo()}
              </div>
            </div>
      );
    }
  }

export default Modal;
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "xp.css/dist/XP.css";
import Draggable from 'react-draggable';


class ResumeModal extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <Draggable
        axis="both"
        handle=".window"
        defaultPosition={{x: 40, y: -80}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>

        <div style={{ width: 800 , height: 500, marginLeft: 20, overflow: 'contain'}} className="window">
          <div className="title-bar" style={{width: 'calc(98.5%)', height:30}}>
            <div className="title-bar-text" style={{width: 75, height:'calc(100%)', marginTop:15}} >My Resume</div>
            <div className="title-bar-controls" style={{width: 75, height:'calc(100%)', marginTop:10}}>
              <button aria-label="Minimize" style={{height:21}} />
              <button aria-label="Maximize" style={{height:21}} />
              <button aria-label="Close" style={{height:21}}  onClick={(e) => this.props.myProps.closeModal()}/>
            </div>
          </div>
        
          <div className="window-body" style={{width:'calc(99%)', height:'calc(92%)'}}>
            <div className="field-row" style={{ justifyContent: "center" }}>
            </div>
          </div>
        </div>

      </Draggable>
    );
  }
};

export default ResumeModal; 
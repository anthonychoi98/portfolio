import React, { Component } from "react";
import ReactDOM from "react-dom";
import "xp.css/dist/XP.css";
import Draggable from 'react-draggable';


class AboutMeModal extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        function changeTabs(e) {
            const target = e.target;
            const parent = target.parentNode;
            const grandparent = parent.parentNode;
        
            // Remove all current selected tabs
            parent
            .querySelectorAll('[aria-selected="true"]')
            .forEach(t => t.setAttribute("aria-selected", false));
        
            // Set this tab as selected
            target.setAttribute("aria-selected", true);
        
            // Hide all tab panels
            grandparent
            .querySelectorAll('[role="tabpanel"]')
            .forEach(p => p.setAttribute("hidden", true));
        
            // Show the selected panel
            grandparent.parentNode
            .querySelector(`#${target.getAttribute("aria-controls")}`)
            .removeAttribute("hidden");
        }
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
                        <div className="title-bar-text" style={{width: 75, height:'calc(100%)', marginTop:15}} >About Me</div>
                        <div className="title-bar-controls" style={{width: 75, height:'calc(100%)', marginTop:10}}>
                            <button aria-label="Minimize" style={{height:21}} />
                            <button aria-label="Maximize" style={{height:21}} />
                            <button aria-label="Close" style={{height:21}}  onClick={(e) => this.props.myProps.closeModal()}/>
                        </div>
                    </div>
                
                <section className="tabs" style={{width:'calc(99.3%)', height: 500, margin: 3, overflow:'contain'}}>
                    <menu role="tablist" aria-label="Sample Tabs">
                    <button onClick={changeTabs} id="tab-1" role="tab" aria-selected="true" aria-controls="tab-A" tabIndex="0">About Me</button>
                    <button onClick={changeTabs} id="tab-2" role="tab" aria-selected="false" aria-controls="tab-B" tabIndex="-1">Some Projects</button>
                    <button onClick={changeTabs} id="tab-3" role="tab" aria-selected="false" aria-controls="tab-C" tabIndex="-1">Contact Me</button>
                    </menu>
                    <article role="tabpanel" id="tab-A" aria-labelledby="tab-1" style={{height:'calc(81.4%)'}}>
                        <div className="tab1" style={{overflow:'auto', height:'calc(101%)', width:'calc(101%)'}}>
                            <img src="https://i.imgur.com/XlqHUI9.png" style={{maxHeight: 1400, maxWidth: 720}}></img>
                        </div>
                    </article>
                    <article role="tabpanel" id="tab-B" aria-labelledby="tab-2" hidden style={{height:'calc(81.4%)', overflow:'contain'}}>
                        <div className="tab2" style={{overflow:'auto', height:'calc(101%)', width:'calc(101%)'}}>
                            <img src="https://i.imgur.com/OZ2dJtI.png" style={{maxHeight: 1400, maxWidth: 720}}></img>
                        </div>
                        
                    </article>
                    <article role="tabpanel" id="tab-C" aria-labelledby="tab-3" hidden style={{height:'calc(81.4%)'}}>
                        <a href="mailto:achoi39@ucmerced.edu"><h3>Email Me</h3></a>
                        <h3>Call or text me at (213)245-3455</h3>
                        
                    </article>
                </section>
            </div>
            </Draggable>
        );
    }
    };

export default AboutMeModal; 



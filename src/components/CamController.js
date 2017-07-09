import React, { Component, PropTypes } from 'react';
import {MOVECAM_UP, MOVECAM_DOWN, MOVECAM_LEFT, MOVECAM_RIGHT, STILL} from '../constants/ActionTypes';

export default class CamController extends Component {

  constructor(props, context) {
    super(props, context);
    this.props.websocket.connect();
  }

  handleMoveCam(type){
     this.props.actions.moveCam(type);
  }

  handleStopCamMove(){
    this.props.actions.stopCamMove();
  }

  handleStartCam(){
    this.props.actions.startCamera();
  }

  handleStopCam(){
    this.props.actions.stopCamera();
  }

  render() {
    return (
      <div className="shifting"  style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <button onMouseDown={() => { this.handleStartCam(); }}>Start</button>
        <button onMouseDown={() => { this.handleStopCam(); }}>Stop</button>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", margin:"0 0 0 50px"}}>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <div onMouseDown={() => {this.handleMoveCam(MOVECAM_UP);}} onMouseUp={() => {this.handleStopCamMove();}}>
              <a rel="nofollow">
                <span className="topCam"></span>
              </a>
            </div>
          </div>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <div onMouseDown={() => {this.handleMoveCam(MOVECAM_LEFT);}} onMouseUp={()=>{this.handleStopCamMove();}}>
              <a rel="nofollow">
              <span className="leftCam"></span>
            </a>
            </div>
            <div onMouseDown={() => {this.handleMoveCam(MOVECAM_RIGHT);}} onMouseUp={()=>{this.handleStopCamMove();}}>
              <a rel="nofollow">
                <span className="rightCam"></span>
              </a>
            </div>
          </div>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <div onMouseDown={() => {this.handleMoveCam(MOVECAM_DOWN);}} onMouseUp={()=>{this.handleStopCamMove();}}>
              <a rel="nofollow">
                <span className="bottomCam"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CamController.propTypes = {
  websocket: PropTypes.object.isRequired,
  move: PropTypes.string,
  actions: PropTypes.object.isRequired
};

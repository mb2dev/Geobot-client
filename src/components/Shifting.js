import React, { Component, PropTypes } from 'react';
import {MOVE_FORWARD, MOVE_BACKWARD, MOVE_LEFT, MOVE_RIGHT} from '../constants/ActionTypes';
import {MOVECAM_UP, MOVECAM_DOWN, MOVECAM_LEFT, MOVECAM_RIGHT} from '../constants/ActionTypes';

export default class Shiting extends Component {

  constructor(props, context) {
    super(props, context);
    this.props.websocket.connect();
  }
  handleMoveRobot(type){
     this.props.actions.moveRobot(type);
  }

  handleStop(){
    this.props.actions.stopRobot();
  }

  handleStopCam(){
    this.props.actions.stopCamera();
  }


  render() {
    return (
      <div  className="shifting"  style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        {/* Div Top Button */}
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        {this.props.move}
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <div onMouseDown={() => {this.handleMoveRobot(MOVE_FORWARD);}} onMouseUp={() => {this.handleStop();}}>
            <a rel="nofollow" href="#">
              <span className="top"></span>
            </a>
          </div>
        </div>
        {/* End Div Top Button */}

        {/* Div Bottom Button */}
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <div onMouseDown={() => {this.handleMoveRobot(MOVE_LEFT);}} onMouseUp={()=>{this.handleStop();}}>
            <a rel="nofollow" href="#">
              <span className="left"></span>
            </a>
          </div>
          <div onMouseDown={() => {this.handleMoveRobot(MOVE_BACKWARD);}} onMouseUp={()=>{this.handleStop();}}>
            <a rel="nofollow" href="#">
              <span className="bottom"></span>
            </a>
          </div>
          <div onMouseDown={() => {this.handleMoveRobot(MOVE_RIGHT);}} onMouseUp={()=>{this.handleStop();}}>
            <a rel="nofollow" href="#">
              <span className="right"></span>
            </a>
          </div>
        </div>
        </div>
      {/* End Div Bottom Button */}

      {/* Begin Camera Control */}
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", margin:"0 0 0 50px"}}>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <div onMouseDown={() => {this.handleMoveRobot(MOVECAM_UP);}} onMouseUp={() => {this.handleStopCam();}}>
            <a rel="nofollow" href="#">
              <span className="topCam"></span>
            </a>
          </div>
        </div>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <div onMouseDown={() => {this.handleMoveRobot(MOVECAM_LEFT);}} onMouseUp={()=>{this.handleStopCam();}}>
            <a rel="nofollow" href="#">
            <span className="leftCam"></span>
          </a>
          </div>
          <div onMouseDown={() => {this.handleMoveRobot(MOVECAM_RIGHT);}} onMouseUp={()=>{this.handleStopCam();}}>
            <a rel="nofollow" href="#">
              <span className="rightCam"></span>
            </a>
          </div>
        </div>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <div onMouseDown={() => {this.handleMoveRobot(MOVECAM_DOWN);}} onMouseUp={()=>{this.handleStopCam();}}>
          <a rel="nofollow" href="#">
            <span className="bottomCam"></span>
          </a>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

Shiting.propTypes = {
  move: PropTypes.string,
  actions: PropTypes.object.isRequired
};

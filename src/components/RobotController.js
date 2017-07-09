import React, { Component, PropTypes } from 'react';
import {MOVE_FORWARD, MOVE_BACKWARD, MOVE_LEFT, MOVE_RIGHT} from '../constants/ActionTypes';

export default class RobotController extends Component {

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


  render() {
    return (
      <div  className="shifting"  style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        {/* Div Top Button */}
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        {this.props.move}
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <div onMouseDown={() => {this.handleMoveRobot(MOVE_FORWARD);}} onMouseUp={() => {this.handleStop();}}>
            <a rel="nofollow">
              <span className="top"></span>
            </a>
          </div>
        </div>
        {/* End Div Top Button */}

        {/* Div Bottom Button */}
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <div onMouseDown={() => {this.handleMoveRobot(MOVE_LEFT);}} onMouseUp={()=>{this.handleStop();}}>
            <a rel="nofollow">
              <span className="left"></span>
            </a>
          </div>
          <div onMouseDown={() => {this.handleMoveRobot(MOVE_BACKWARD);}} onMouseUp={()=>{this.handleStop();}}>
            <a rel="nofollow">
              <span className="bottom"></span>
            </a>
          </div>
          <div onMouseDown={() => {this.handleMoveRobot(MOVE_RIGHT);}} onMouseUp={()=>{this.handleStop();}}>
            <a rel="nofollow">
              <span className="right"></span>
            </a>
          </div>
        </div>
        </div>
      {/* End Div Bottom Button */}
      </div>
    );
  }
}

RobotController.propTypes = {
  move: PropTypes.string,
  actions: PropTypes.object.isRequired,
  websocket: PropTypes.object.isRequired,
};

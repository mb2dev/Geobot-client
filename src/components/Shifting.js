import React, { Component, PropTypes } from 'react';
import {MOVE_FORWARD, MOVE_BACKWARD, MOVE_LEFT, MOVE_RIGHT} from '../constants/ActionTypes';

export default class Shiting extends Component {

  constructor(props, context) {
    super(props, context);
    this.props.websocket.connect();
  }
  handleMoveRobot(type){
     this.props.actions.moveRobot(type);
  }

  handleForward(){
   console.log("bonjour", this.props.actions);
   this.props.actions.forward(this.props.websocket);
  }

  handleBackward(){
    this.props.actions.backward();
  }

  handleLeft(){
    this.props.actions.left();
  }

  handleRight(){
    this.props.actions.right();
  }


  render() {
    return (
      <div  className="shifting" >
        {/* Div Top Button */}
        {this.props.move}
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <div onClick={() => {this.handleMoveRobot(MOVE_FORWARD);}}>
            <a rel="nofollow" href="#">
              <span className="top"></span>
            </a>
          </div>
        </div>
        {/* End Div Top Button */}

        {/* Div Bottom Button */}
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <div onClick={() => {this.handleMoveRobot(MOVE_LEFT);}}>
            <a rel="nofollow" href="#">
              <span className="left"></span>
            </a>
          </div>
          <div onClick={() => {this.handleMoveRobot(MOVE_BACKWARD);}}>
            <a rel="nofollow" href="#">
              <span className="bottom"></span>
            </a>
          </div>
          <div onClick={() => {this.handleMoveRobot(MOVE_RIGHT);}}>
            <a rel="nofollow" href="#">
              <span className="right"></span>
            </a>
          </div>
        </div>
      {/* End Div Bottom Button */}
      </div>
    );
  }
}

Shiting.propTypes = {
  move: PropTypes.string,
  actions: PropTypes.object.isRequired
};

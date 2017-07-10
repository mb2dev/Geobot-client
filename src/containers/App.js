import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { WebsocketActions, RobotControllerActions, CamControllerActions } from '../actions';
import RobotController from '../components/RobotController';
import CamController from '../components/CamController';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    console.log("App", this.props);
    const { robot_actions, cam_actions, robot_move, cam_move, websocket } = this.props;
    const streamUrl = robot_move === "STOP_CAM" ? "" : "http://192.168.1.26:8080/?action=stream";
    return (
      <div className="main-app-container">
        {/*<RobotController move={robot_move} actions={robot_actions} websocket={websocket}/>
        <CamController move={cam_move} actions={cam_actions} websocket={websocket}/>*/}
        <img src={streamUrl} style={{transform: "rotate(180deg)"}}/>
      </div>
    );
  }
}

App.propTypes = {
  // counter: PropTypes.number.isRequired,
  robot_actions: PropTypes.object.isRequired,
  cam_actions: PropTypes.object.isRequired,
  websocket: PropTypes.object.isRequired,
  robot_move: PropTypes.string.isRequired,
  cam_move: PropTypes.string.isRequired,
  camera: PropTypes.string.isRequired,
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    robot_move: state.robot_move,
    cam_move : state.cam_move,
    camera : state.camera,
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    cam_actions: bindActionCreators(CamControllerActions, dispatch),
    robot_actions: bindActionCreators(RobotControllerActions, dispatch),
    websocket: bindActionCreators(WebsocketActions, dispatch)
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

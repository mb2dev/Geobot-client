import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/CounterActions';
import * as ShiftingActions from '../actions/ShiftingActions';
import * as Websocket from '../actions/Websocket';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import Shifting from '../components/Shifting';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';



/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    console.log(this.props);
    const { counter, actions, actionsShifting,move,websocket} = this.props;
    return (
      <div className="main-app-container">

        <div className="main-app-nav">Simple Redux Template</div>
        {/* notice that we then pass those unpacked props into the Counter component */}
        <Counter counter={counter} actions={actions} />
        {/*<Footer />*/}
        <Shifting move={move} actions={actionsShifting} websocket={websocket}/>

        <Video className="video-container" autoPlay loop muted
          controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
          poster="http://sourceposter.jpg"
          onCanPlayThrough={() => {
              // Do stuff
          }}>
          <source src="http://localhost:3001/camera" type="video/webm" />
          <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
      </Video>

      </div>
    );
  }
}

App.propTypes = {
  move: PropTypes.string,
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    counter: state.counter,
    move: state.move,
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
    actions: bindActionCreators(CounterActions, dispatch),
    actionsShifting: bindActionCreators(ShiftingActions, dispatch),
    websocket:bindActionCreators(Websocket,dispatch)

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

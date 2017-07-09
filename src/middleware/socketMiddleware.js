import * as actions from '../actions/WebsocketActions'

const addr = "ws://192.168.1.26:3030/shifting";

const socketMiddleware = (function(addr){
  var socket = null;

  const onOpen = (ws,store,token) => evt => {
    console.log("onOpen");
    console.log(ws,actions,store);
    //Set our state to disconnected
    store.dispatch(actions.connected());
  }

  const onClose = (ws,store) => evt => {
    //Tell the store we've disconnected
    store.dispatch(actions.disconnected());
  }

  const onMessage = (ws,store) => evt => {
    //Parse the JSON message received on the websocket
    var msg = JSON.parse(evt.data);
    console.log("onMessage", msg);
    switch(msg.type) {
      case "WS_MESSAGE":
        //Dispatch an action that adds the received message to our state
        store.dispatch(actions.messageReceived(msg));
        break;
      default:
        console.log("Received unknown message type: '" + msg.type + "'");
        break;
    }
  }

  return store => next => action => {
    switch(action.type) {
      //The user wants us to connect
      case 'CONNECT':
        //Start a new connection to the server
        if(socket != null) {
          return;
          // socket.close();
        }
        //Send an action that shows a "connecting..." status for now
        store.dispatch(actions.connecting());

        //Attempt to connect (we could send a 'failed' action on error)
        socket = new WebSocket(addr);
        socket.onmessage = onMessage(socket,store);
        socket.onclose = onClose(socket,store);
        socket.onopen = onOpen(socket,store,action.token);
        break;

      //The user wants us to disconnect
      case 'DISCONNECT':
        if(socket != null) {
          socket.close();
        }
        socket = null;

        //Set our state to disconnected
        store.dispatch(actions.disconnected());
        break;

      //Send the 'SEND_MESSAGE' action down the websocket to the server
      case 'SEND_MESSAGE':
        socket.send(JSON.stringify(action.msg));
      break;

      //This action is irrelevant to us, pass it on to the next middleware
      default:
        return next(action);
    }
  }
})(addr);

export default socketMiddleware

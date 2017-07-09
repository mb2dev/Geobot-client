
export function connect() {
    return {
      type: "CONNECT"
    }
}

export function connecting(){
    return {
      type: "CONNECTING"
    }
}

export function connected() {
    return {
      type: "CONNECTED"
    }
}


export function disconnected() {
    return {
      type: "DISCONNECTED"
    }
}

export function sendMsg(msg){
  //console.log("SEND");
  return {
    type: "SEND_MESSAGE",
    msg
  }
}

export function messageReceived(msg) {
    return {
      type: "RECEIVED_MESSAGE",
      msg
    }
}

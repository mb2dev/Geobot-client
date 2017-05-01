
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
      type: ""
    }
}

export function sendMsg(msg){
  console.log("SEND");
  return {
    type: "SEND_CHAT_MESSAGE",
    "msg": msg
  }
}



export function messageReceived() {
    return {
      type: "disco"
    }
}

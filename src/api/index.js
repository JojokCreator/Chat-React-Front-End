var socket = new WebSocket('wss://go-chat-back-end.onrender.com/ws')

let connect = (cb) => {
  console.log("connecting")

  socket.open = () => {
    console.log("successfully connected")
  }

  socket.onmessage = (msg) => {
    console.log("Message from websocket: ", msg)
    cb(msg)
  }

  socket.onclose = (event) => {
    console.log("socket closed connection: ", event)
  }

    socket.onerror = (error) => {
      console.log("socket error: ", error)
  }
};

let sendMsg = (msg) => {
  console.log("sending msg: ", msg);
  socket.send(msg)
}

export { connect, sendMsg }
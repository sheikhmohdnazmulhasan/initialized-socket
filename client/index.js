const socket = io("http://localhost:3000");

socket.on("connect", (response) => {
  console.log(response);
});

socket.on("message", (res) => {
  console.log(res);
  //   send data to server
  socket.emit("message", "hello there");
});

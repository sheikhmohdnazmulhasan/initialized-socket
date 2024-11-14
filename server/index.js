const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const socket = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5500",
  },
});

socket.on("connection", (socket) => {
  console.log(socket);

  // received data from client
  socket.on("message", (data) => {
    console.log(data);
  });

  // sending  hello to client;
  socket.emit("message", "hello!");
});

httpServer.listen(3000, () => {
  // console.log("server connected on port: 3000");
});

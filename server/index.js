const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const socket = new Server(httpServer, {});

socket.on("connection", (socket) => {
  console.log(socket);
});

httpServer.listen(3000, () => {
  console.log("server connected on port: 3000");
});

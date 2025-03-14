// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the frontend folder
app.use(express.static("frontend"));

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Receive and broadcast messages
  socket.on("message", (data) => {
    io.emit("message", data); // Broadcast message to everyone
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

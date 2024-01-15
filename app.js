const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Un usuario se ha conectado");
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/profesor/index.html`);
});

server.listen(3060, () => {
  console.log("servidor corriendo en el puerto http://localhost:3060");
});

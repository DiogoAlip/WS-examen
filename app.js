const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

let notasData = Array(arrAlumnos.length).fill("none");

io.on("connection", (socket) => {
  console.log("Un usuario se ha conectado");

  socket.on("submitNotes", (newNotasData) => {
    notasData = [...newNotasData];
  });

  socket.emit("initialData", notasData);
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/profesor/index.html`);
});

app.get("/alumno", (req, res) => {
  res.sendFile(`${__dirname}/alumno/index.html`);
});

server.listen(3060, () => {
  console.log("servidor corriendo en el puerto http://localhost:3060");
});

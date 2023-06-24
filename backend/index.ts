const express = require("express");
const cors = require("cors");
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    allowedHeaders: "*",
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(socket.id, " has connected.");
});

httpServer.listen(3001);
console.log("Server is listening on port 3001");

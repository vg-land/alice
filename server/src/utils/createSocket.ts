import { Express } from "express";
import http from "http";

const createSocket = (app: Express) => {
  const server = http.createServer(app);
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket: any) => {
    let addedUser = false;

    // when the client emits 'new message', this listens and executes
    socket.on("new message", (data: any) => {
      // we tell the client to execute 'new message'
      socket.broadcast.emit("new message", {
        username: socket.username,
        message: data,
      });
    });

    // when the client emits 'add user', this listens and executes
    socket.on("add user", (username: any) => {
      if (addedUser) return;

      // we store the username in the socket session for this client
      socket.username = username;
      addedUser = true;
      socket.emit("login", {});
      // echo globally (all clients) that a person has connected
      socket.broadcast.emit("user joined", {
        username: socket.username,
      });
    });

    // when the user disconnects.. perform this
    socket.on("disconnect", () => {
      if (addedUser) {
        // echo globally that this client has left
        socket.broadcast.emit("user left", {
          username: socket.username,
        });
      }
    });
  });

  return server;
};

export default createSocket;

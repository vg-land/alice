import { io } from "socket.io-client";
import { useMessage } from "./messages";

const store = {
  message: [],
};

declare const process: {
  env: {
    REACT_APP_SOCKET: string;
  };
};

export default store;

export const createSocket = () => {
  const socket = io(process.env["REACT_APP_SOCKET"]);
  socket.on("connect", () => {
    socket.emit("login", { username: "Admin" });
  });

  // Whenever the server emits 'login', log the login message
  socket.on("login", () => {});

  // Whenever the server emits 'new message', update the chat body
  socket.on("new message", (data: any) => {
    const message = useMessage();
    message.get({
      value: data.message,
      id: data.name,
    });
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log("you have been disconnected");
  });

  socket.on("reconnect", () => {
    console.log("you have been reconnected");
  });

  socket.on("reconnect_error", () => {
    console.log("attempt to reconnect has failed");
  });

  return socket;
};

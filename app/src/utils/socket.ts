import { useEffect } from "react";
import { io } from "socket.io-client";
import { useMessage } from "../store/messages";

declare const process: {
  env: {
    REACT_APP_SOCKET: string;
  };
};

const socket = io(process.env["REACT_APP_SOCKET"]);

export const useSocket = () => {
  const message = useMessage();
  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("add user", "Admin");
    });

    // Whenever the server emits 'login', log the login message
    socket.on("login", () => {});

    // Whenever the server emits 'new message', update the chat body
    socket.on("new message", (data: any) => {
      message.get(data);
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
  }, [message]);
  return socket;
};

export { socket };

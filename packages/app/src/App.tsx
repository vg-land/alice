import React, { useEffect } from "react";

import Chat from "./pages/chat";
import WebChat from "./pages/web";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { io } from "socket.io-client";
import { useMessage } from "./store/messages";

declare const process: {
  env: {
    REACT_APP_SOCKET: string;
  };
};

const App: React.FC = () => {
  const message = useMessage();

  useEffect(() => {
    const socket = io(process.env["REACT_APP_SOCKET"]);
    socket.on("connect", () => {
      console.log("connect");
      socket.emit("add user", "Admin");
    });

    // Whenever the server emits 'new message', update the chat body
    socket.on("message", (data: any) => {
      message.get(data);
    });

    socket.on("disconnect", () => {
      // console.log("you have been disconnected");
      socket.close()
    });

    socket.on("reconnect", () => {
      console.log("you have been reconnected");
    });

    socket.on("reconnect_error", () => {
      console.log("attempt to reconnect has failed");
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/web">
          <WebChat></WebChat>
        </Route>
        <Route path="/">
          <Chat></Chat>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

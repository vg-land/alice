import React from "react";

import Chat from "./pages/chat";
import WebChat from "./pages/web";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: any = () => {
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

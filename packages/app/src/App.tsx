/* eslint-disable react-hooks/exhaustive-deps */

import Chat from "./pages/chat"
import WebChat from "./pages/web"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import React from "react"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/web">
          <WebChat></WebChat>
        </Route>

        <Route path="/chat">
          <Chat></Chat>
        </Route>
        <Route path="/">
          <Redirect to="/web"></Redirect>
        </Route>
      </Switch>
    </Router>
  )
}

export default App

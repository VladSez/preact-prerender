import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Profile from "../routes/profile";

export function App() {
  return (
    <div id="app">
      <Header />
      <Router>
        <Home path="/" />
        <Profile path="/profile" />
      </Router>
    </div>
  );
}

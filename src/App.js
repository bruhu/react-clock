import React, { Component } from "react";
import Clock from "./Clock";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Watch my clock.</p>
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;

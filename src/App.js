import React, { Component } from "react";
import "./App.css";
import Blue from "./components/blueBox/blue";
import Tomato from "./components/TomatoBox/Tomato";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Tomato />
        <Blue />
      </div>
    );
  }
}
export default App;

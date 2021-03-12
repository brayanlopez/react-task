import React, { Component } from "react";
import Navigation from "./components/Navigation";
import "./style.css";

import Tarjeta from "./Tarjeta";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App container-fluid">
        <Navigation />
        <Tarjeta />
      </div>
    );
  }
}

export default App;

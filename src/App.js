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
        <h1 className="text-center">Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

export default App;

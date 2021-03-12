import React, { Component } from "react";
import Navigation from "./components/Navigation";
import TodoForm from "./components/TodoForm";
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
        <div className="container">
          <div className="row mt-4">
            <TodoForm />
            <Tarjeta />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

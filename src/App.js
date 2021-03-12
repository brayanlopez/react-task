import React, { Component } from "react";
import Navigation from "./components/Navigation";
import "./style.css";

import { todos } from "./datos/todos.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
  }
  //let nav = new Navigation();
  tarjetas() {
    const todos = this.state.todos.map((todo, i) => {
      return {
        //<p>{todo.title}</p>
      };
    });
    return todos;
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

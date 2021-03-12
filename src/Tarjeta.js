import React, { Component } from "react";

import { todos } from "./datos/todos.json";

class Tarjeta extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
  }
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="card">
          <div className="card-header">
            <h3>{todo.title}</h3>
          </div>
          <div className="card-body">
            <p>{todo.description}</p>
            <p>{todo.responsible}</p>
          </div>
        </div>
      );
    });
    return todos;
  }
}

export default Tarjeta;

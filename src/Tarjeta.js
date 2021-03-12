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
      return {
        //<p>{todo.title}</p>
      };
    });
    return todos;
  }
}

export default Tarjeta;

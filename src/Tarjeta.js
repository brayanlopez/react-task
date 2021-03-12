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
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-fill badge-danger">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      );
    });
    return todos;
  }
}

export default Tarjeta;

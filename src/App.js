import React, { Component } from "react";
import Navigation from "./components/Navigation";
import TodoForm from "./components/TodoForm";
import "./style.css";

import Tarjeta from "./Tarjeta";

import todos from "./datos/todos";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  render() {
    return (
      <div className="App container-fluid">
        <Navigation />
        <div className="container">
          <div className="row mt-4">
            <TodoForm onAddTodo={this.handleAddTodo} />
            <Tarjeta tasks={todos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

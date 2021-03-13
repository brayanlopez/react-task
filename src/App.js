import React, { Component } from "react";
//Componentes
import Navigation from "./components/Navigation";
import TodoForm from "./components/TodoForm";
import Tarjeta from "./Tarjeta";
//estilos
import "./style.css";
//datos
import { todos } from "./datos/todos";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  removeTodo(index) {
    console.log(index);
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      })
    });
  }

  render() {
    return (
      <div className="App container-fluid">
        <Navigation ntareas={this.state.todos.length} />
        <div className="container">
          <div className="row mt-4">
            <TodoForm onAddTodo={this.handleAddTodo} />
            <Tarjeta tasks={this.state.todos} remove={this.removeTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

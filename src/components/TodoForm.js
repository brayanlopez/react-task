import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      responsible: "",
      description: "",
      priority: "low"
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: "",
      responsible: "",
      description: "",
      priority: "low"
    });
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card mt-4">
          <form className="card-body" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleInput}
                className="form-control"
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                value={this.state.responsible}
                onChange={this.handleInput}
                name="responsible"
                className="form-control"
                placeholder="Responsible"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="description"
                className="form-control"
                value={this.state.description}
                onChange={this.handleInput}
                placeholder="Description"
              />
            </div>
            <div className="form-group">
              <select
                name="priority"
                value={this.state.priority}
                onChange={this.handleInput}
                className="form-control"
              >
                <option>low</option>
                <option>medium</option>
                <option>high</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoForm;

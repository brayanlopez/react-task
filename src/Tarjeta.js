import React, { Component } from "react";

class Tarjeta extends Component {
  constructor() {
    super();
  }

  render() {
    const todos = this.props.tasks.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
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
              <button
                className="btn btn-danger"
                onClick={this.props.remove.bind(this)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });
    return todos;
  }
}

export default Tarjeta;

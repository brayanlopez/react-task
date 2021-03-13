import React, { Component } from "react";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      title: "Task",
      ntareas: 10
    };
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
          {this.state.title} -
          <span className="badge badge-fill badge-info">
            {this.props.ntareas}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navigation;

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
          {this.state.title} - {this.state.ntareas}
        </a>
      </nav>
    );
  }
}

export default Navigation;

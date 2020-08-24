import React, { Component } from "react";

class AddTodo extends Component {
  state = { content: "" };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.content === "") {
      alert("Empty todo");
      return null;
    }
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };
  render() {
    return (
      <div className="row card z-depth-0">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <input
              type="text"
              value={this.state.content}
              onChange={this.handleChange}
              className="col s10"
            />
            <button className="col s2 waves-effect waves-light btn-large indigo">
              ADD TODO
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;

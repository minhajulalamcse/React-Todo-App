import React from "react";
import "./App.css";
import Todos from "./Todos";
import CompletedTodos from "./CompletedTodos";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "Watch TV", completed: false },
      { id: 2, content: "Buy milk", completed: false },
      { id: 3, content: "Go to school", completed: true },
      { id: 4, content: "Go to college", completed: true },
    ],
  };
  handleComplete = (id) => {
    const todos = this.state.todos.filter((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos,
    });
  };
  handleDelete = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="blue-grey-text darken-4">TODO APP</h1>
        <Todos
          todos={this.state.todos}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
        />
        <p className="flow-text">Completed</p>
        <CompletedTodos
          todos={this.state.todos}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;

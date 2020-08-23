import React from "react";
import "./App.css";
import Todos from "./Todos";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "Watch TV", completed: false },
      { id: 2, content: "Buy milk", completed: false },
      { id: 3, content: "Go to school", completed: true },
      { id: 4, content: "Go to college", completed: true },
    ],
  };
  render() {
    return (
      <div className="container">
        <h1 className="blue-grey-text darken-4">TODO APP</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

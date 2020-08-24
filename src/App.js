import React from "react";
import "./App.css";

import Todos from "./Todos";
import CompletedTodos from "./CompletedTodos";
import AddTodo from "./AddTodo";
import Buttons from "./Buttons";

class App extends React.Component {
  state = {
    todos: [],
  };
  handleComplete = (id) => {
    console.log(id);
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

  addTodo = (todo) => {
    todo.id = Math.random();
    todo.completed = false;
    const todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };
  markAllAsCompleted = () => {
    const todos = this.state.todos.map((todo) => {
      if (!todo.completed) {
        todo.completed = true;
      }
      return todo;
    });
    this.setState({
      todos,
    });
  };
  deleteCompleteTodos = () => {
    const todos = this.state.todos.filter((todo) => {
      return todo.completed === false;
    });
    this.setState({
      todos,
    });
  };
  render() {
    let showCompletedTodosComponent = false;
    this.state.todos.map((todo) => {
      if (todo.completed) showCompletedTodosComponent = true;
    });
    return (
      <div className="container">
        <h1 className="indigo-text darken-4">TODO APP</h1>
        <AddTodo addTodo={this.addTodo} />
        <Buttons
          markAllAsCompleted={this.markAllAsCompleted}
          deleteCompleteTodos={this.deleteCompleteTodos}
        />

        <Todos
          todos={this.state.todos}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
        />

        {showCompletedTodosComponent ? (
          <div>
            <p className="flow-text">Completed</p>
            <CompletedTodos
              todos={this.state.todos}
              handleComplete={this.handleComplete}
              handleDelete={this.handleDelete}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;

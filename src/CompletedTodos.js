import React from "react";

const CompletedTodos = ({ todos }) => {
  const completedTodoList = todos.filter((todo) => {
    if (todo.completed) {
      return todo;
    }
  });
  const todoList = completedTodoList.map((todo) => {
    return (
      <div className="collection-item">
        <p>{todo.content}</p>
      </div>
    );
  });
  return <div className="collection">{todoList}</div>;
};

export default CompletedTodos;

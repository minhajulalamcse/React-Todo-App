import React from "react";

const Todos = ({ todos }) => {
  const todoList = todos.map((todo) => {
    return (
      <div className="collection-item">
        <p>{todo.content}</p>
      </div>
    );
  });
  return <div className="collection">{todoList}</div>;
};

export default Todos;

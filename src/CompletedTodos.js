import React from "react";

const CompletedTodos = ({ todos, handleDelete }) => {
  const completedTodoList = todos.filter((todo) => {
    if (todo.completed) {
      return todo;
    }
    return null;
  });

  const todoList = completedTodoList.length ? (
    completedTodoList.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <p>
            {todo.content}
            <i
              className="material-icons right red-text pointer"
              onClick={() => handleDelete(todo.id)}
            >
              delete
            </i>
          </p>
        </div>
      );
    })
  ) : (
    <div className="collection-item">
      <p>There are no completed todo left.</p>
    </div>
  );
  return <div className="collection">{todoList}</div>;
};

export default CompletedTodos;

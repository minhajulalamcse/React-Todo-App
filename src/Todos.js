import React from "react";

const Todos = ({ todos, handleComplete, handleDelete }) => {
  const notCompletedTodoList = todos.filter((todo) => {
    if (todo.completed === false) {
      return todo;
    }
    return null;
  });

  const todoList = notCompletedTodoList.length ? (
    notCompletedTodoList.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <p>
            <i
              className="material-icons left grey-text pointer"
              onClick={() => handleComplete(todo.id)}
            >
              check_circle_outline
            </i>
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
      <p>There are no todos left.</p>
    </div>
  );

  return <div className="collection">{todoList}</div>;
};

export default Todos;

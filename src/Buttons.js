import React from "react";

const Buttons = ({ markAllAsCompleted, deleteCompleteTodos }) => {
  return (
    <div className="row">
      <p
        onClick={() => markAllAsCompleted()}
        className="btn  btn-large col s6 markAllAsCompleted"
      >
        <i className="material-icons left  pointer">check_circle_outline</i>
        Mark all as completed
      </p>
      <p
        onClick={() => deleteCompleteTodos()}
        className="btn btn-large col s6 deleteAllCompletedTodos"
      >
        <i className="material-icons left  pointer">check_circle</i>
        DELETE ALL COMPLETED TODOS
      </p>
    </div>
  );
};

export default Buttons;

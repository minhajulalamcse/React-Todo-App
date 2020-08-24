import React from "react";

const Buttons = ({ markAllAsCompleted, deleteCompleteTodos }) => {
  return (
    <div className="row">
      <p
        onClick={() => markAllAsCompleted()}
        className="col s6 btn green btn-large"
      >
        <i className="material-icons left white-text pointer">
          check_circle_outline
        </i>
        Mark all as completed
      </p>
      <p
        onClick={() => deleteCompleteTodos()}
        className="col s6 btn red btn-large"
      >
        <i className="material-icons left white-text pointer">check_circle</i>
        DELETE ALL COMPLETED TODOS
      </p>
    </div>
  );
};

export default Buttons;

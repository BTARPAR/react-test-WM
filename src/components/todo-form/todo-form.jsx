import * as React from "react";
import "./todo-form.scss";

export const TodoForm = () => {
  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={""}
        onChange={() => {}}
        onKeyUp={() => {}}
      />
      <button type="button" onClick={() => {}}>
        Add task
      </button>
    </div>
  );
};

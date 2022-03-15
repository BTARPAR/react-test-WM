import * as React from "react";
import { Checkbox } from "../checkbox";
import "./todo-list.scss";

export const TodoList = () => {
  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content"></div>
      {/* use Checkbox component */}
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
    </div>
  );
};

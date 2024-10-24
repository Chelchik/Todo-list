import { useState } from "react";
import App from "../App";

function TodoFooter({todos, clearCompleted}) {
  const completedArr = todos.filter((todo) => todo.isActive).length;

    return (
      <div className="todoFooter">
        <p>{completedArr}/{todos.length}</p>

        <button className="remove-completed-btn" onClick={clearCompleted}>Clear completed</button>
      </div>
    );
  }
  export default TodoFooter;
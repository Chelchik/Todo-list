import { useState } from "react";
import Todo from "./Todo";

function CreateTodo({todos, onChangeTodo ,onDeleteTodo}) {
  return (
    <div>
        <ul className="todoList"> 
          {todos.map(todo => {
            return (
              <li key={todo.id}>   
              <Todo todo={todo} onDelete={onDeleteTodo} onChange={onChangeTodo} />
              </li>
            )
            })}
        </ul>
    </div>
  );
}
export default CreateTodo;
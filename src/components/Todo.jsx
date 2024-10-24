import { useState } from "react";
import App from "../App";

function Todo({todo, onChange, onDelete}) {
    return (
        <label className="todo">
            <input type="checkbox" checked={todo.isActive}  onChange={e => 
                {onChange({
                    ...todo, 
                    isActive: e.target.checked
                });
            }}/>

            {todo.title}

            <button onClick={() => onDelete(todo.id)} className="deleteBtn">Delete</button>
        </label>
    )
}

export default Todo;
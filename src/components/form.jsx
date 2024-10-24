import { useState } from 'react';
import Todo from './Todo';
import App from '../App';

function AddForm({addTodo}) {
  const [title, setTitle] = useState("");

  const titleFunc = (e) => {
    setTitle(e.target.value);
  }

  const todoAddFunc = (e) => {
    e.preventDefault()
    setTitle("");
    addTodo(title);

  }

  return (
    <form id="addForm" onSubmit={todoAddFunc}>
        <input type="text" id="inputValue" placeholder="Add todo" value={title} onChange={titleFunc}/>
        <input type="submit" value="add" id="submit"/>
    </form>
  );
}

export default AddForm;

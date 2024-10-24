import React from 'react';
import { useState } from 'react';
import './App.css';
import AddForm from './components/form';
import CreateTodo from './components/CreateTodo';
import Todo from './components/Todo';
import TodoFooter from './components/TodoFooter';
import { clear } from '@testing-library/user-event/dist/clear';

const todosArr = [
  { id: 0, title: 'Buy milk',  isActive: false },
  { id: 1, title: 'Eat tacos', isActive: false },
  { id: 2, title: 'Brew tea',  isActive: false },
];

let lastTodoId = todosArr.length;

function App() {
  const [todos, setTodos] = useState(todosArr);
    
  const addTodoFunc = (title) => {
      setTodos([
        ...todos,
        {
          id: lastTodoId++,
          title: title,
          isActive: false
        }
      ]);
    }

    const changeTodoFunc =(nextTodo) => {
      setTodos(todos.map(todo => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      }));
    }

    const deleteTodoFunc = (todoId) => {
      setTodos(
        todos.filter(todo => todo.id !== todoId)
      );
    }

    const clearCompletedFunc = () => {
      setTodos (
        todos.filter(todo => !todo.isActive)
      )
    }

  return (
    <div className="App">
      <div className="cont">
      <AddForm addTodo={addTodoFunc}/>

      <CreateTodo todos={todos} onDeleteTodo={deleteTodoFunc} onChangeTodo={changeTodoFunc}/>

      <TodoFooter todos={todos} clearCompleted={clearCompletedFunc}/>
    </div>
    </div>
  );
}
export default App;
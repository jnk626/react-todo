import { useState } from 'react'
import './App.css'

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handlerSubmit(e) {
    e.preventDefault();

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        }
      ]
    })

    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }

        return todo;
      })
    }

    )
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  console.log(todos);
  // fragment <> </>
  return <> 
  <form onSubmit={handlerSubmit}>
    <label className="labels" htmlFor="search">New Item</label>
    <input 
    value={newItem}
    onChange={e => setNewItem(e.target.value)}
    name="search" 
    id="search"  />
    <button className='btn'>Aggiungi</button>
  </form>
  <h1 className='title'>Todo List</h1>
  <ul>
    {todos.length == 0 && "No todos yet"}
    {todos.map(todo => {
      return (
      <li key={todo.id}>
        <label key={todo.id}>
          <input 
          type="checkbox" 
          checked={todo.checked}
          onChange={e => toggleTodo(todo.id, e.target.checked)} />
          {todo.title}
        </label>
        
        <button 
        className='btn delete-btn' 
        onClick={() => deleteTodo(todo.id)}>
          Delete
        </button> 
      </li>)
    }) }
  </ul>
  </>
  //line 61: for React, eache element must have a unique, non-progressive id
  //line 72: lambda because I want it to execute, not to have the result
  }

export default App

import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';


function App() {
  // we need a list of todo's
  // useState - hook for short term memory
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handelSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, input])
    setInput("")
  }

  return (
    <div className="app">

      <h1>To-do App</h1>

      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
        <button disabled={!input} type="submit" onClick={handelSubmit}>Add Todo</button>
      </form>

      {
      todos.map((todo , i) => (
      <Todo title={todo} key={i}/>
      ))
      }

    </div>
  );
}

export default App;

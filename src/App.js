import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase'

function App() {
  // we need a list of todo's
  // useState - hook for short term memory
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // when this componet ran, ran this function once
  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().title))
    })
  }, [])

  const handelSubmit = (e) => {
    e.preventDefault()

    //setTodos([...todos, input])
    db.collection('todos').add({
      title: input,
    })

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

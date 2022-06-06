// Dependencies
import React, { useState, useEffect } from "react";

// Components
import Todo from "./Components/Todo/Todo";
import NewTodo from "./Components/NewTodo/NewTodo";

// Services
import { getAllTodos, doTodo, deleteTodo, createTodo, updateTodo } from './Services/todoService'

// Styles
import "./tailwind.output.css";

// TODO Endpoint https://jsonplaceholder.typicode.com/todos

const App = () => {
  let [todos, setTodos] = useState([{}])
  let [newTodo, setNewTodo] = useState('')
  let [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    const getTodoData = async() => {
      let data = await getAllTodos()
      setTodos(data)
    }
    getTodoData()
  }, [])

  const handleDoTodo = async(todoId) => {
    await doTodo(todoId)
    let data = await getAllTodos()
    setTodos(data)
  }

  const handleDeleteTodo = async(todoId) => {
    await deleteTodo(todoId)
    let data = await getAllTodos()
    setTodos(data)
  }

  const handleCreateTodo = async(e) => {
    e.preventDefault()
    await createTodo(newTodo)
    let data = await getAllTodos()
    setNewTodo('')
    setTodos(data)
  }

  const handleUpdateTodo = async(todoId) => {
    await updateTodo(todoId, newTitle)
    let data = await getAllTodos()
    setNewTitle('')
    setTodos(data)
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="w-3/4 mx-auto shadow mt-24 px-4 py-4 rounded border bg-gray-400">
        <h1 className="font-bold text-center text-2xl">What Are We Doing Today?</h1>
        <NewTodo 
          createTodo={handleCreateTodo} 
          newTodo={newTodo}
          setNewTodo={setNewTodo}
        />
        {
          todos&&
          todos?.map((todo, i) => (
            <div key={i} >
              <Todo 
                todo={todo} 
                doTodo={handleDoTodo} 
                deleteTodo={handleDeleteTodo}
                updateTodo={handleUpdateTodo}
                newTitle={newTitle}
                setNewTitle={setNewTitle}
              />   
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default App;

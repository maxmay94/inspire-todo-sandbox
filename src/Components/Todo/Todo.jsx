import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Todo = ({ todo, doTodo, deleteTodo, updateTodo, newTitle, setNewTitle }) => {

  let background = todo.completed ? 
    'bg-purple-200 hover:bg-purple-300 w-2/3 mx-auto rounded drop-shadow-xl my-5 text-center p-5 mb-5' 
    : 'bg-blue-200 hover:bg-blue-300 w-2/3 mx-auto rounded drop-shadow-xl my-5 text-center p-5 mb-5'

  let decoration = todo.completed ? 'line-through' : ''

  return(
    <div className={background}>

      <button 
        className='w-full h-full'
        onClick={() => doTodo(todo)}
      >
        <h1 className={decoration}>{todo.title}</h1>
      </button>

      <div className='flex'>
        <Popup trigger={
          <button className='flex-1 mt-5 p-1 bg-yellow-200 hover:bg-yellow-300 mx-5 rounded'>
            edit
          </button>
        }>
          <form>
            <input 
              className='flex-1 rounded w-full h-full p-2 mx-auto'
              type="text" 
              required
              placeholder='TODO:'
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button 
              className='flex-1 p-2 rounded w-full h-full bg-green-200 hover:bg-green-300 mx-auto mt-5'
              onClick={() => updateTodo(newTitle)}
            >
              Submit Change
            </button>
          </form>
        </Popup>

        <button 
          className='flex-1 mt-5 p-1 bg-red-200 hover:bg-red-300 mx-5 rounded'
          onClick={() => deleteTodo(todo.id)}
        >
          delete
        </button>
      </div>
    </div>
  )
}

export default Todo
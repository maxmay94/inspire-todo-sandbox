import React from 'react'

const Todo = ({ todo, doTodo, deleteTodo }) => {

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
        <button className='flex-1 mt-5 p-1 bg-yellow-200 hover:bg-yellow-300 mx-5 rounded'>
          edit
        </button>

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
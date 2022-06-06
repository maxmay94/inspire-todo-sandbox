import React from 'react'

const NewTodo = ({ createTodo, newTodo, setNewTodo }) => {
  return (
    <div className='bg-gray-200 hover:bg-gray-300 w-2/3 mx-auto rounded drop-shadow-xl my-5 text-center p-5 mb-5'>
      <form onSubmit={createTodo}>
        <input 
          className='flex-1 rounded w-full h-full p-2 mx-auto'
          type="text" 
          required
          placeholder='TODO:'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className='flex-1 p-2 rounded w-full h-full bg-green-200 hover:bg-green-300 mx-auto mt-5'>Add</button>
      </form>
    </div>
  )
}

export default NewTodo
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

export const getAllTodos = async() => {
  try {
    const res = await fetch(BASE_URL)
    let data = await res.json()
    return data
  } catch(err) {
    throw err
  }
}

export const createTodo = async(todo) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        title: todo,
        completed: false,
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    let data = await res.json()
    console.log('new todo -->', data)
    return data
  } catch(err) {
    throw err
  }
}

export const deleteTodo = async(todoId) => {
  console.log('DELETE --> ',todoId)
  try {
    const res = await fetch(`${BASE_URL}/${todoId}`, {
      method: 'DELETE'
    })
    let data = await res.json()
    console.log(data)
    return data
  } catch(err) {
    throw err
  }
}

export const updateTodo = async() => {
  try {

  } catch(err) {
    throw err
  }
}

export const doTodo = async(todo) => {
  console.log('before -->', todo.completed)
  try {
    const res = await fetch(`${BASE_URL}/${todo._id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: !todo.completed,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    let data = await res.json()
    console.log('after -->',data.completed)
    return data
  } catch(err) {
    throw err
  }
}
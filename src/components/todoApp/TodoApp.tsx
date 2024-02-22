import { useEffect, useState } from 'react'
import {
  fetchTodosFromJsonPlaceholder,
  createTodoInJsonPlaceholder,
  type Todo,
} from './../../api/todos'
import { AddItem } from './AddItem'

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    getTodos()
  }, [])

  async function getTodos() {
    const todos = await fetchTodosFromJsonPlaceholder()
    setTodos(todos)
  }

  async function addTodo(item: Todo): Promise<Todo> {
    // Add a new todo to the server
    const res = await createTodoInJsonPlaceholder(item)
    console.log(res)
    return res
  }

  function deleteTodo(id: Todo['id']) {
    console.log(id)
    // Delete a todo from the server
  }

  // function updateTodo() {
  //   // Update a todo on the server
  // }

  // getTodos()

  return (
    <div className='w-96'>
      <AddItem addTodo={addTodo} />
      <h1>Todo App</h1>
    </div>
  )
}

import { useEffect, useState } from 'react'
import {
  fetchTodosFromJsonPlaceholder,
  createTodoInJsonPlaceholder,
  type Todo,
} from './../../api/todos'
import { AddItem } from './AddItem'
import { List } from './List'

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    getTodos()
  }, [])

  async function getTodos() {
    const todos = await fetchTodosFromJsonPlaceholder()
    setTodos(todos)
  }

  async function addTodo(item: Todo) {
    createTodoInJsonPlaceholder(item)
      .then((res) => {
        setTodos((prev) => [res, ...prev])
      })
      .catch((err) => {
        console.log(err)
      })
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
      <List todoList={todos} />
    </div>
  )
}

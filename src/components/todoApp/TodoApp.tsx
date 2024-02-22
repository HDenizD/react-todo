import { useEffect, useState } from 'react'
import {
  fetchTodosFromJsonPlaceholder,
  createTodoInJsonPlaceholder,
  type Todo,
  deleteTodoFromJsonPlaceholder,
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
      .then((res: Todo) => {
        res.id = crypto.getRandomValues(new Uint32Array(1))[0]
        setTodos((prev) => [res, ...prev])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function deleteTodo(id: Todo['id']) {
    console.log(id)
    deleteTodoFromJsonPlaceholder(id)
      .then(() => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='max-w-96 w-96'>
      <AddItem addTodo={addTodo} />
      <h1 className='text-2xl font-bold mt-4'>Todo List</h1>
      {todos.length === 0 && 'No todos yet'}
      <List
        todoList={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

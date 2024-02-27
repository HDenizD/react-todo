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
    setTodos(todos.map((todo) => ({ ...todo, isEditMode: false })))
  }

  function addTodo(item: Todo) {
    createTodoInJsonPlaceholder(item)
      .then((res: Todo) => {
        res.id = crypto.getRandomValues(new Uint32Array(1))[0]
        setTodos((prev) => [res, ...prev])
        // console.log(todos)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function deleteTodo(id: Todo['id']) {
    if (!id) return
    deleteTodoFromJsonPlaceholder(id)
      .then(() => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function toggleEditMode(id: Todo['id']) {
    setTodos((prev) =>
      prev.map((todo) => {
        todo.isEditMode = false
        if (todo.id === id) {
          todo.isEditMode = !todo.isEditMode
        }
        return todo
      })
    )
  }

  function toggleTodoCompleted(id: Todo['id'], toState: Todo['completed']) {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = toState
        }
        return todo
      })
    )
  }

  return (
    <div className='max-w-96'>
      <AddItem addTodo={addTodo} />
      <h1 className='text-2xl font-bold mt-4'>Todo List</h1>
      {todos.length === 0 && 'No todos yet'}
      <List
        todoList={todos}
        deleteTodo={deleteTodo}
        toggleTodoCompleted={toggleTodoCompleted}
        toggleEditMode={toggleEditMode}
      />
    </div>
  )
}

import { createContext, useEffect, useState } from 'react'

import type { Todo } from '../../api/todos'
import {
  fetchTodosFromJsonPlaceholder,
  createTodoInJsonPlaceholder,
  deleteTodoFromJsonPlaceholder,
  updateTodoFromJsonPlaceholder,
} from './../../api/todos'

export const TodoContext = createContext({})

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetchTodosFromJsonPlaceholder().then((todos) => {
      setTodos(todos)
    })
  }, [])

  function addTodo(title: Todo['title']) {
    console.log('add', title)
  }
  function deleteTodo(id: Todo['id']) {
    console.log('delete', id)
  }
  function editTodo(id: Todo['id'], title: Todo['title']) {
    console.log('edit', id, title)
  }
  function toggleCompletedTodo(id: Todo['id']) {
    console.log('toggleCompleted', id)
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        add: addTodo,
        delete: deleteTodo,
        edit: editTodo,
        toggleCompleted: toggleCompletedTodo,
      }}
    >
      <div className='max-w-96'>
        <h1 className='text-2xl font-bold mt-4'>Todo List</h1>
      </div>
    </TodoContext.Provider>
  )
}

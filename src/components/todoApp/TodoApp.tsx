import { createContext, useEffect, useState } from 'react'
import { List } from './List'

import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

import type { Todo } from '../../api/todos'
import {
  fetchTodosFromJsonPlaceholder,
  createTodoInJsonPlaceholder,
  deleteTodoFromJsonPlaceholder,
  updateTodoFromJsonPlaceholder,
} from './../../api/todos'

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])

  const { addTodo, deleteTodo, editTodo, toggleCompletedTodo } =
    useContext(TodoContext)

  useEffect(() => {
    fetchTodosFromJsonPlaceholder().then((todos) => {
      setTodos(todos)
    })
  }, [])

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        deleteTodo,
        editTodo,
        toggleCompletedTodo,
      }}
    >
      <div className='max-w-96'>
        <h1 className='text-2xl font-bold mt-4'>Todo List</h1>
        <List todos={todos} />
      </div>
    </TodoContext.Provider>
  )
}

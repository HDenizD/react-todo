import { createContext } from 'react'
import type { Todo } from './../api/todos'

export const TodoContext = createContext({
  addTodo: (title: Todo['title']) => {
    console.log('add', title)
  },
  deleteTodo: (id: Todo['id']) => {
    console.log('delete', id)
  },
  editTodo: (id: Todo['id'], title: Todo['title']) => {
    console.log('edit', id, title)
  },
  toggleCompletedTodo: (id: Todo['id']) => {
    console.log('toggleCompleted', id)
  },
})

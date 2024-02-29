import { createContext } from 'react'
import type { Todo } from './../api/todos'

export const TodoContext = createContext({
  todos: [],
  add: (title: Todo['title']) => {
    console.log('add')
  },
  delete: (id: Todo['id']) => {
    console.log('delete')
  },
  edit: (id: Todo['id'], title: Todo['title']) => {
    console.log('edit')
  },
  toggleCompleted: (id: Todo['id']) => {
    console.log('toggleCompleted')
  },
})

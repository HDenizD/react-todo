import type { Todo } from '../api/todos'

export type ActionType = {
  type: keyof typeof actionTypes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any
}

const actionTypes = {
  SET_TODOS: 'SET_TODOS',
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  EDIT_TODO: 'EDIT_TODO',
  TOGGLE_COMPLETED_TODO: 'TOGGLE_COMPLETED_TODO',
} as const

export function reducer(todos: Todo[], action: ActionType) {
  switch (action.type) {
    case 'SET_TODOS':
      return action.payload
    case 'ADD_TODO':
      return [...todos, action.payload]
    case 'DELETE_TODO':
      return todos.filter((todo) => todo.id !== action.payload)
    case 'EDIT_TODO':
      return todos.map((todo) =>
        todo.id === action.payload?.id
          ? { ...todo, title: action.payload?.title }
          : todo
      )
    case 'TOGGLE_COMPLETED_TODO':
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

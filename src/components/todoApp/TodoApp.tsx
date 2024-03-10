import { useReducer, useEffect, createContext } from 'react'
import { List } from './List'

import { reducer, type ActionType } from './../../store/TodoReducer'

import {
  type Todo,
  fetchTodosFromJsonPlaceholder,
  // createTodoInJsonPlaceholder,
  // deleteTodoFromJsonPlaceholder,
  // updateTodoFromJsonPlaceholder,
} from './../../api/todos'

export const TodoContext = createContext<{
  state: Todo[]
  dispatch: React.Dispatch<ActionType>
}>({ state: [], dispatch: () => {} })

export function TodoApp() {
  const [todosState, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    fetchTodosFromJsonPlaceholder().then((todos: Todo[]) => {
      dispatch({ type: 'SET_TODOS', payload: todos })
    })
  }, [])

  return (
    <TodoContext.Provider value={{ state: todosState, dispatch }}>
      <div className='max-w-96'>
        <h1 className='text-2xl font-bold mt-4'>Todo List</h1>
        <List todos={todosState} />
      </div>
    </TodoContext.Provider>
  )
}

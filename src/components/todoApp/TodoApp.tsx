import { useReducer, useEffect } from 'react'
import { List } from './List'

import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { reducer } from './../../store/TodoReducer'

import {
  type Todo,
  fetchTodosFromJsonPlaceholder,
  // createTodoInJsonPlaceholder,
  // deleteTodoFromJsonPlaceholder,
  // updateTodoFromJsonPlaceholder,
} from './../../api/todos'

export function TodoApp() {
  const [todosState, dispatch] = useReducer(reducer, [])

  const { addTodo, deleteTodo, editTodo, toggleCompletedTodo } =
    useContext(TodoContext)

  useEffect(() => {
    fetchTodosFromJsonPlaceholder().then((todos: Todo[]) => {
      dispatch({ type: 'SET_TODOS', payload: todos })
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
        <List todos={todosState} />
      </div>
    </TodoContext.Provider>
  )
}

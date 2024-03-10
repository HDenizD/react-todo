import type { Todo } from '../../api/todos'
import { useContext } from 'react'
import { TodoContext } from './TodoApp'

export function ListItem({ todoItem }: { todoItem: Todo }) {
  const { dispatch } = useContext(TodoContext)

  const toggleCompletedTodo = (id: number) => {
    dispatch({ type: 'TOGGLE_COMPLETED_TODO', payload: id })
  }

  return (
    <div>
      <span className={todoItem.completed ? 'line-through' : ''}>
        {todoItem.title}
      </span>
      <button
        className='bg-indigo-700 p-2 rounded ml-2'
        onClick={() => toggleCompletedTodo(todoItem.id as number)}
      >
        Completed
      </button>
    </div>
  )
}

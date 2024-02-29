import { useContext } from 'react'
import type { Todo } from '../../api/todos'
import { TodoContext } from './../../context/TodoContext'

export function ListItem({ todoItem }: { todoItem: Todo }) {
  const { toggleCompletedTodo } = useContext(TodoContext)

  return (
    <div>
      {todoItem.title}
      <button
        className='bg-indigo-700 p-2 rounded ml-2'
        onClick={() => toggleCompletedTodo(todoItem.id)}
      >
        Completed
      </button>
    </div>
  )
}

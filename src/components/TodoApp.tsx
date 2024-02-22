import AddTodos from './AddTodos'
import TodosList from './TodosList.jsx'
import { getTodos } from '../api/todos'
import { useState } from 'react'

export type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

// console.log(todosData)
const todosData: Todo[] = await getTodos()

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(todosData)

  const handleAddClick = (todo: string) => {
    setTodos([
      {
        title: todo,
        id: 32,
        userId: 10,
        completed: false,
      },
      ...todos,
    ])
  }

  return (
    <div className='outline outline-2  p-2 max-w-[24rem] w-[calc(100vw-1rem)] rounded'>
      <AddTodos handleAddClick={handleAddClick} />
      <TodosList todosData={todos} />
    </div>
  )
}

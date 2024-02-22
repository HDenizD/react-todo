import { useState } from 'react'
import type { Todo } from './../../api/todos'

export function AddItem({ addTodo }: { addTodo: (item: Todo) => void }) {
  const [todoItem, setTodoItem] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!todoItem) return
    const newItem = {
      userId: 1,
      id: 1,
      title: todoItem,
      completed: false,
    }
    addTodo(newItem)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex gap-1'
    >
      <input
        type='text'
        value={todoItem}
        className='text-black rounded p-2 w-3/4 outline focus:outline-2 focus:outline-indigo-700'
        onChange={(e) => {
          setTodoItem(e.target.value)
        }}
      />
      <button
        type='submit'
        className='rounded p-2 w-1/4 bg-indigo-700 hover:bg-indigo-500'
      >
        Add
      </button>
    </form>
  )
}

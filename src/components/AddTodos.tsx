import { useState } from 'react'

export default function AddTodos({ handleAddClick }: { handleAddClick: any }) {
  const [todo, setTodo] = useState('')

  return (
    <div className='flex gap-2 w-full'>
      <input
        type='text'
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        className='outline outline-2 rounded block focus:outline-indigo-600 w-full text-black p-2'
      />
      <button
        className='outline outline-2 rounded p-2 hover:outline-indigo-600'
        onClick={() => handleAddClick(todo)}
      >
        Add
      </button>
    </div>
  )
}

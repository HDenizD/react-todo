import { Todo } from '../../api/todos'
import { useEffect, useMemo, useState } from 'react'

export function ListItem({
  item,
  deleteTodo,
}: {
  item: Todo
  deleteTodo: (id: Todo['id']) => void
}) {
  const timerMaxCount = 1
  let editModeDebounceCounter = 0
  let intervalTimer: number

  const [isEditMode, setIsEditMode] = useState<boolean>(false)

  function toggleEditModeDebouncer() {
    editModeDebounceCounter = 0
    intervalTimer = setInterval(() => {
      editModeDebounceCounter++
      if (editModeDebounceCounter === timerMaxCount) {
        setIsEditMode(true)
        clearInterval(intervalTimer)
        return
      }
    }, 1000)
    if (editModeDebounceCounter >= timerMaxCount) {
      clearInterval(intervalTimer)
      return
    }
  }

  function strikeTodoAndAbortToggleEditModeDebouncer() {
    clearInterval(intervalTimer)
    if (!isEditMode && editModeDebounceCounter < timerMaxCount) {
      return console.log('strike')
    }
  }

  return (
    <li
      className='flex break-words gap-3 justify-between p-3 outline outline-1 first-of-type:rounded-t last-of-type:rounded-b hover:bg-zinc-800 cursor-pointer items-center'
      onMouseDown={() => toggleEditModeDebouncer()}
      onMouseUp={() => strikeTodoAndAbortToggleEditModeDebouncer()}
      onMouseLeave={() => strikeTodoAndAbortToggleEditModeDebouncer()}
    >
      <span className='break-all select-none'> {item.title}</span>
      <button
        onClick={() => deleteTodo(item.id)}
        className='bg-red-500 rounded p-1 select-none hover:bg-red-400'
      >
        Delete
      </button>
    </li>
  )
}

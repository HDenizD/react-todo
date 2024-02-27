import { Todo } from '../../api/todos'

export function ListItem({
  item,
  deleteTodo,
  toggleTodoCompleted,
  toggleEditMode,
}: {
  item: Todo
  deleteTodo: (id: Todo['id']) => void
  toggleTodoCompleted: (id: Todo['id'], toState: Todo['completed']) => void
  toggleEditMode: (id: Todo['id']) => void
}) {
  const timerMaxCount = 1
  let editModeDebounceCounter = 0
  let intervalTimer: number

  function toggleEditModeDebouncer() {
    editModeDebounceCounter = 0
    intervalTimer = setInterval(() => {
      editModeDebounceCounter++
      if (editModeDebounceCounter === timerMaxCount) {
        toggleEditMode(item.id)
        clearInterval(intervalTimer)
        return
      }
    }, 500)
    if (editModeDebounceCounter >= timerMaxCount) {
      clearInterval(intervalTimer)
      return
    }
  }

  function strikeTodoAndAbortToggleEditModeDebouncer() {
    clearInterval(intervalTimer)
    if (!item.isEditMode && editModeDebounceCounter < timerMaxCount) {
      item.completed
        ? toggleTodoCompleted(item.id, false)
        : toggleTodoCompleted(item.id, true)
    }
  }

  return (
    <li
      className={`
        flex break-words gap-3 justify-between p-3 outline outline-1 first-of-type:rounded-t last-of-type:rounded-b cursor-pointer items-center ${
          item.isEditMode && 'bg-yellow-400 text-black'
        } ${!item.isEditMode && 'hover:bg-zinc-800'} `}
      onMouseDown={() => toggleEditModeDebouncer()}
      onMouseUp={() => strikeTodoAndAbortToggleEditModeDebouncer()}
      onKeyDown={(e) => {
        e.key === 'Enter' && console.log('Save Changed Todo')
      }}
    >
      {item.isEditMode ? (
        <input className='p-1'></input>
      ) : (
        <span
          className={`break-all select-none ${
            item.completed && 'line-through'
          }`}
        >
          {item.title}
        </span>
      )}

      {item.isEditMode ? (
        <button
          onClick={() => console.log('update todo')}
          className='bg-green-500 min-w-16 rounded p-1 select-none hover:bg-green-400'
        >
          Update
        </button>
      ) : (
        <button
          onClick={() => deleteTodo(item.id)}
          className='bg-red-500 min-w-16 rounded p-1 select-none hover:bg-red-400'
        >
          Delete
        </button>
      )}
    </li>
  )
}

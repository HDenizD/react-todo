import { Todo } from '../../api/todos'

export function ListItem({
  item,
  deleteTodo,
}: {
  item: Todo
  deleteTodo: (id: Todo['id']) => void
}) {
  return (
    <li className='flex break-words gap-3 justify-between p-3 outline outline-1 first-of-type:rounded-t last-of-type:rounded-b hover:bg-zinc-800 cursor-pointer items-center'>
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

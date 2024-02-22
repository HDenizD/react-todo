import { Todo } from '../../api/todos'
import { ListItem } from './ListItem'

export function List({ todoList }: { todoList: Todo[] }) {
  console.log(todoList)
  return (
    <ul className='outline outline-2 rounded mt-2 flex flex-col justify-center'>
      {todoList.map((item) => (
        <ListItem
          item={item}
          key={item.id}
        />
      ))}
    </ul>
  )
}

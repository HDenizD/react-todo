import { Todo } from '../../api/todos'
import { ListItem } from './ListItem'

export function List({
  todoList,
  deleteTodo,
  toggleTodoCompleted,
  toggleEditMode,
}: {
  todoList: Todo[]
  deleteTodo: (id: Todo['id']) => void
  toggleTodoCompleted: (id: Todo['id']) => void
  toggleEditMode: (id: Todo['id']) => void
}) {
  return (
    <ul className='outline outline-2 rounded mt-2 flex flex-col justify-center'>
      {todoList.map((item) => (
        <ListItem
          item={item}
          key={item.id}
          deleteTodo={deleteTodo}
          toggleTodoCompleted={toggleTodoCompleted}
          toggleEditMode={toggleEditMode}
        />
      ))}
    </ul>
  )
}

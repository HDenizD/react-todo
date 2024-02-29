// import { ListItem } from './ListItem'
import { useContext } from 'react'
import { TodoContext } from './TodoApp'
import { Todo } from '../../api/todos'
import { ListItem } from './ListItem'

export function List({ todos }: { todos: Todo[] }) {
  return (
    <div>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todoItem={todo}
        />
      ))}
    </div>
  )
}

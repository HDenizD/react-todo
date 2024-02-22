import type { Todo } from './TodoApp'

function TodosList({ todosData }: { todosData: Todo[] }) {
  console.log(todosData)

  return (
    <ul>
      {todosData.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default TodosList

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const API_URL = 'https://jsonplaceholder.typicode.com/todos'

// Create
export async function createTodo(todo: Partial<Todo>) {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return response.json()
}

// Read
export async function getTodos(): Promise<Todo[]> {
  const response = await fetch(API_URL)
  const todos = await response.json()
  return todos.slice(0, 10)
}

// Update
export async function updateTodo(id: number, updatedTodo: Partial<Todo>) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedTodo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return response.json()
}

// Delete
export async function deleteTodo(id: number): Promise<boolean> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
  return response.status === 200
}

import axios from 'axios'

const url = 'http://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then((response) => {
  console.log(response.data)

  const { id, title, completed } = response.data as Todo

  logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    ID: ${id}
    Has a title of: ${title}
    is completed: ${completed}
  `)
}

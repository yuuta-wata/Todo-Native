import axios from 'axios'
import { API_SERVER_URL } from '@env'

export const fetchTaskList = (token: string | null) =>
  axios.post(
    API_SERVER_URL,
    {
      query: `query GetTodoList {
        getTodoList {
          id
          userId
          title
        }
      }
        `
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

export const taskPostRepuest = (token: string | null, title: string) =>
  axios.post(
    API_SERVER_URL,
    {
      query: `mutation CreateTodo($title: String!) {
      createTodo(input: { title: $title })
    }
      `,
      variables: {
        title
      }
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

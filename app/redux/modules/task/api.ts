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

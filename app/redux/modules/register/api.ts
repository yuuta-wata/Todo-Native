import axios from 'axios'
import { API_SERVER_URL } from '@env'

interface RegisterData {
  nickname: string
  email: string
  password: string
}

export const register = ({ nickname, email, password }: RegisterData) =>
  axios.post(
    API_SERVER_URL,
    {
      query: `mutation Register($nickname: String!, $email: String!, $password: String!) {
          register(
            registerInput: { nickname: $nickname, email: $email, password: $password }
          )
        }
        `,
      variables: {
        nickname,
        email,
        password
      }
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

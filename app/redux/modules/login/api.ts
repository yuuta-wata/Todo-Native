import axios from 'axios'
import { API_SERVER_URL } from '@env'

interface LoginData {
  email?: string
  password?: string
}

export const login = ({ email, password }: LoginData) =>
  axios.post(
    API_SERVER_URL,
    {
      query: `mutation Login($email: String!, $password: String!) {
        login(loginInput: { email: $email, password: $password }) {
          id
          nickname
          email
          accessToken
        }
      }
        `,
      variables: {
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

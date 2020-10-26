import axios from 'axios'
import { API_SERVER_URL } from '@env'

interface LoginData {
  email?: string
  password?: string
}

export const testLogin = ({ email, password }: LoginData) =>
  axios.post(API_SERVER_URL, {
    query: `mutation TestUserLogin($email: String!, $password: String!) {
        testUserLogin(loginInput: { email: $email, password: $password })
      }
        `,
    variables: {
      email,
      password
    }
  })

import axios from 'axios'

interface LoginData {
  email?: string
  password?: string
}

export const login = ({ email, password }: LoginData) =>
  axios.post(
    'http://localhost:4000/graphql',
    {
      query: `mutation Login($email: String!, $password: String!) {
        login(loginInput: { email: $email, password: $password })
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

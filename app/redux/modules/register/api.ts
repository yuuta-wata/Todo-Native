import axios from 'axios'

interface RegisterData {
  nickname: string
  email: string
  password: string
}

export const register = ({ nickname, email, password }: RegisterData) =>
  axios.post(
    'http://localhost:4000/graphql',
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

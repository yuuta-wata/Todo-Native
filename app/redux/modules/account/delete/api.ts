import axios from 'axios'
import { API_SERVER_URL } from '@env'

export const sendDeleteRequest = (
  nickname: string,
  email: string,
  password: string,
  token: string | null
) =>
  axios.post(
    API_SERVER_URL,
    {
      query: `mutation DeleteAccount(
        $nickname: String!
        $email: String!
        $password: String!
      ) {
        deleteAccount(
          deleteAccountInput: {
            nickname: $nickname
            email: $email
            password: $password
          }
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
        Authorization: `Bearer ${token}`
      }
    }
  )

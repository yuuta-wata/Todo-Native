import axios from 'axios'
import { API_SERVER_URL } from '@env'

export const sendLogoutRequest = (token: string | null) =>
  axios.post(
    API_SERVER_URL,
    {
      query: `mutation LogOut {
        logOut
      }
        `
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

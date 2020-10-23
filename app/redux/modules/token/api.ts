import axios from 'axios'
import { REFRESH_TOKEN_URL } from '@env'

export const fetchRefreshToken = (token: string | null) =>
  axios.post(REFRESH_TOKEN_URL, undefined, {
    withCredentials: true,
    headers: {
      cookie: token
    }
  })

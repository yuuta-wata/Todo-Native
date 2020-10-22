import axios from 'axios'
import { REFRESH_TOKEN_URL } from '@env'

export const fetchRefreshToken = () =>
  axios.post(REFRESH_TOKEN_URL, {
    credentials: 'include'
  })

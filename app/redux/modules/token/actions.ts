import {
  FETCH_REFRESH_TOKEN,
  GET_ACCESS_TOKEN,
  TokenActionType
} from './action-type'

export const FetchRefreshToken = (): TokenActionType => ({
  type: FETCH_REFRESH_TOKEN
})

export const GetAccessToken = (
  accessToken: string | null,
  loggedIn: boolean
): TokenActionType => ({
  type: GET_ACCESS_TOKEN,
  payload: {
    accessToken,
    loggedIn
  }
})

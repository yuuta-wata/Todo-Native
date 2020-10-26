import {
  FETCH_REFRESH_TOKEN,
  SET_ACCESS_TOKEN,
  TokenActionType
} from './action-type'

export const FetchRefreshToken = (): TokenActionType => ({
  type: FETCH_REFRESH_TOKEN
})

export const SetAccessToken = (
  accessToken: string | null,
  loggedIn: boolean
): TokenActionType => ({
  type: SET_ACCESS_TOKEN,
  payload: {
    accessToken,
    loggedIn
  }
})

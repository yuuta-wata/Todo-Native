import {
  FETCH_REFRESH_TOKEN,
  FETCH_REFRESH_TOKEN_RESULTED,
  TokenActionType
} from './action-type'

export const FetchRefreshToken = (): TokenActionType => ({
  type: FETCH_REFRESH_TOKEN
})

export const FetchResult = (result: boolean): TokenActionType => ({
  type: FETCH_REFRESH_TOKEN_RESULTED,
  payload: {
    result
  }
})

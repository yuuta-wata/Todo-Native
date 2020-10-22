export const FETCH_REFRESH_TOKEN = 'FETCH_REFRESH_TOKEN'
export const FETCH_REFRESH_TOKEN_RESULTED = 'FETCH_REFRESH_TOKEN_RESULTED'

interface FetchRefreshToken {
  type: typeof FETCH_REFRESH_TOKEN
}

interface FetchRefreshTokenResult {
  type: typeof FETCH_REFRESH_TOKEN_RESULTED
  payload: {
    result: boolean
  }
}

export type TokenActionType = FetchRefreshToken | FetchRefreshTokenResult

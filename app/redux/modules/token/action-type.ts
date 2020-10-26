export const FETCH_REFRESH_TOKEN = 'FETCH_REFRESH_TOKEN'

export const FETCH_REFRESH_TOKEN_RESULTED = 'FETCH_REFRESH_TOKEN_RESULTED'

export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'

interface FetchRefreshToken {
  type: typeof FETCH_REFRESH_TOKEN
}

interface SetAccessToken {
  type: typeof SET_ACCESS_TOKEN
  payload: {
    accessToken: string | null
    loggedIn: boolean
  }
}

export type TokenActionType = FetchRefreshToken | SetAccessToken

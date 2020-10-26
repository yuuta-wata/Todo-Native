export const TEST_LOGIN_REQUIEST = 'TEST_LOGIN_USER/SEND_LOGIN_REQUIEST'

export const SEND_LOGIN_RESULTED = 'TEST_LOGIN_USER/SEND_LOGIN_RESULTED'

export const LOGIN_LOADING = 'TEST_LOGIN_USER/LOGIN_LOADING'

export const LOGIN_SUCCESS_ALERT = 'TEST_LOGIN_USER/LOGIN_SUCCESS_ALERT'

type UserData = { accessToken: string } | null

export interface LoginResponse {
  data: {
    login: UserData
  }
  errors?: {
    message: {
      message: string
    }
  }[]
}

export interface LoginResulted {
  success: string | null
  error?: string
  cookie?: string
}

interface TestLoginRequiest {
  type: typeof TEST_LOGIN_REQUIEST
}

interface SendLoginResulted {
  type: typeof SEND_LOGIN_RESULTED
  payload: LoginResulted
}

interface LoginLoading {
  type: typeof LOGIN_LOADING
  payload: {
    isLoading: boolean
  }
}

export type TestLoginActionTypes =
  | TestLoginRequiest
  | SendLoginResulted
  | LoginLoading

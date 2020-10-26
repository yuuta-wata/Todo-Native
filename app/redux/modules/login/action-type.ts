export const LOGIN_INPUT_EMAIL = 'LOGIN_INPUT_EMAIL'

export const LOGIN_INPUT_PASSWORD = 'LOGIN_NPUT_PASSWORD'

export const SEND_LOGIN_REQUIEST = 'SEND_LOGIN_REQUIEST'

export const SEND_LOGIN_RESULTED = 'SEND_LOGIN_RESULTED'

export const LOGIN_LOADING = 'LOGIN_LOADING'

export const LOGIN_SUCCESS_ALERT = 'LOGIN_SUCCESS_ALERT'

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
  success: boolean
  error?: string
  token: string | null
}

interface LoginInputEmail {
  type: typeof LOGIN_INPUT_EMAIL
  payload: {
    email: string
  }
}

interface LoginInputPassword {
  type: typeof LOGIN_INPUT_PASSWORD
  payload: {
    password: string
  }
}

interface SendLoginRequiest {
  type: typeof SEND_LOGIN_REQUIEST
  payload: {
    email: string
    password: string
  }
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

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS_ALERT
  payload: {
    successAlert: boolean | null
  }
}

export type LoginActionTypes =
  | LoginInputEmail
  | LoginInputPassword
  | SendLoginRequiest
  | SendLoginResulted
  | LoginLoading
  | LoginSuccess

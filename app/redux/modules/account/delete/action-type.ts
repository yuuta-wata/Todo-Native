export const INPUT_NICKNAME = 'ACCOUNT/DELETE/INPUT_NICKNAME'

export const INPUT_EMAIL = 'ACCOUNT/DELETE/INPUT_EMAIL'

export const INPUT_PASSWORD = 'ACCOUNT/DELETE/INPUT_PASSWORD'

export const SEND_DELETE_REQUEST = 'ACCOUNT/SEND_DELETE_REQUEST'

export const SEND_DELETE_RESULTED = 'ACCOUNT/SEND_DELETE_RESULTED'

export const DELETE_LOADING = 'ACCOUNT/DELETE_LOADING'

export const SUCCESS_ALERT = 'ACCOUNT/SUCCESS_ALERT'

export interface AccountDeleteResponse {
  data: {
    deleteAccount: null | boolean
  }
  errors?: {
    message: {
      message: string
    }
  }[]
}

export interface AccountDeleteResulted {
  success: null | boolean
  error?: string
  token?: string | null
}

interface InputNickname {
  type: typeof INPUT_NICKNAME
  payload: {
    nickName: string
  }
}

interface InputEmail {
  type: typeof INPUT_EMAIL
  payload: {
    email: string
  }
}

interface InputPassword {
  type: typeof INPUT_PASSWORD
  payload: {
    password: string
  }
}

interface SendAccountDeleteRequiest {
  type: typeof SEND_DELETE_REQUEST
}

interface SendAccountDeleteResulted {
  type: typeof SEND_DELETE_RESULTED
  payload: AccountDeleteResulted
}

interface AccountDeleteLoading {
  type: typeof DELETE_LOADING
  payload: {
    isLoading: boolean
  }
}

interface SuccessAlert {
  type: typeof SUCCESS_ALERT
  payload: {
    successAlert: boolean | null
  }
}

export type AccountDeleteActionTypes =
  | InputNickname
  | InputEmail
  | InputPassword
  | SuccessAlert
  | SendAccountDeleteRequiest
  | SendAccountDeleteResulted
  | AccountDeleteLoading

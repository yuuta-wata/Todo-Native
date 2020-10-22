export const INPUT_NICKNAME = 'INPUT_NICKNAME'

export const INPUT_EMAIL = 'INPUT_EMAIL'

export const INPUT_PASSWORD = 'INPUT_PASSWORD'

export const SEND_REGISTER_REQUIEST = 'SEND_REGISTER_REQUIEST'

export const SEND_REGISTER_RESULTED = 'SEND_REGISTER_RESULTED'

export const REGISTER_LOADING = 'REGISTER_LOADING'

export const SUCCESS_ALERT = 'SUCCESS_ALERT'
/** WARNING: 一時的な対応、サーバーからのエラーレスポンスのロジックを変更する必要有り。 */
export const EMAIL_UNIQUE_ERROR = 'EMAIL_UNIQUE_ERROR'

export enum ErrorPropertyType {
  NICKNAME = 'nickname',
  EMAIL = 'email',
  PASSWORD = 'password'
}

export interface NicknameErrorType {
  property: ErrorPropertyType.NICKNAME
  constraints: {
    length: string
  }
}

export interface EmailErrorType {
  property: ErrorPropertyType.EMAIL
  constraints: {
    isEmail: string
  }
}

export interface PasswordErrorType {
  property: ErrorPropertyType.PASSWORD
  constraints: {
    length: string
  }
}

export type MessageErrorType =
  | NicknameErrorType
  | EmailErrorType
  | PasswordErrorType

export interface RegisterResponse {
  data: {
    register: null | boolean
  }
  errors?: {
    message: {
      message: MessageErrorType[]
    }
  }[]
}

export interface RegisterResulted {
  success: null | boolean
  error?: MessageErrorType[]
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

interface SendRegisterRequiest {
  type: typeof SEND_REGISTER_REQUIEST
  payload: {
    nickname: string
    email: string
    password: string
    loading: boolean
  }
}

interface SendRegisterResulted {
  type: typeof SEND_REGISTER_RESULTED
  payload: RegisterResulted
}

interface RegisterLoading {
  type: typeof REGISTER_LOADING
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

/** WARNING: 一時的な対応、サーバーからのエラーレスポンスのロジックを変更する必要有り。 */
interface EmailUniqueError {
  type: typeof EMAIL_UNIQUE_ERROR
  payload: {
    error?: string | object
  }
}

export type RegisterActionTypes =
  | InputNickname
  | InputEmail
  | InputPassword
  | SendRegisterRequiest
  | SendRegisterResulted
  | RegisterLoading
  | SuccessAlert
  | EmailUniqueError

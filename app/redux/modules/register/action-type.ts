export const INPUT_NICKNAME = 'INPUT_NICKNAME'

export const INPUT_EMAIL = 'INPUT_EMAIL'

export const INPUT_PASSWORD = 'INPUT_PASSWORD'

export const SEND_REGISTER_REQUIEST = 'SEND_REGISTER_REQUIEST'

export const SEND_REGISTER_RESULTED = 'SEND_REGISTER_RESULTED'

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

export type RegisterActionTypes =
  | InputNickname
  | InputEmail
  | InputPassword
  | SendRegisterRequiest
  | SendRegisterResulted

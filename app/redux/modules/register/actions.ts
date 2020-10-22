import {
  RegisterActionTypes,
  RegisterResulted,
  SUCCESS_ALERT,
  REGISTER_LOADING,
  INPUT_NICKNAME,
  INPUT_EMAIL,
  INPUT_PASSWORD,
  SEND_REGISTER_REQUIEST,
  SEND_REGISTER_RESULTED,
  EMAIL_UNIQUE_ERROR
} from './action-type'

export const ChangeNickname = (nickName: string): RegisterActionTypes => ({
  type: INPUT_NICKNAME,
  payload: {
    nickName
  }
})

export const ChangeEmail = (email: string): RegisterActionTypes => ({
  type: INPUT_EMAIL,
  payload: {
    email
  }
})

export const ChangePassword = (password: string): RegisterActionTypes => ({
  type: INPUT_PASSWORD,
  payload: {
    password
  }
})

export const SendRegisterData = (
  nickname: string,
  email: string,
  password: string
): RegisterActionTypes => ({
  type: SEND_REGISTER_REQUIEST,
  payload: {
    nickname,
    email,
    password,
    loading: true
  }
})

export const SendRegisterResult = (
  result: RegisterResulted
): RegisterActionTypes => ({
  type: SEND_REGISTER_RESULTED,
  payload: result
})

export const IsRegisterLoading = (isLoading: boolean): RegisterActionTypes => ({
  type: REGISTER_LOADING,
  payload: {
    isLoading
  }
})

export const SuccessAlert = (
  successAlert: boolean | null
): RegisterActionTypes => ({
  type: SUCCESS_ALERT,
  payload: {
    successAlert
  }
})
/** WARNING: 一時的な対応、サーバーからのエラーレスポンスのロジックを変更する必要有り。 */
export const EmailUnique = (error?: string | object): RegisterActionTypes => ({
  type: EMAIL_UNIQUE_ERROR,
  payload: {
    error
  }
})

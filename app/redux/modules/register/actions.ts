import {
  RegisterActionTypes,
  RegisterResulted,
  INPUT_NICKNAME,
  INPUT_EMAIL,
  INPUT_PASSWORD,
  SEND_REGISTER_REQUIEST,
  SEND_REGISTER_RESULTED
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

import {
  AccountDeleteActionTypes,
  SUCCESS_ALERT,
  INPUT_NICKNAME,
  INPUT_EMAIL,
  INPUT_PASSWORD,
  SEND_DELETE_RESULTED,
  SEND_DELETE_REQUEST,
  DELETE_LOADING,
  AccountDeleteResponse
} from './action-type'

export const ChangeNickname = (nickName: string): AccountDeleteActionTypes => ({
  type: INPUT_NICKNAME,
  payload: {
    nickName
  }
})

export const ChangeEmail = (email: string): AccountDeleteActionTypes => ({
  type: INPUT_EMAIL,
  payload: {
    email
  }
})

export const ChangePassword = (password: string): AccountDeleteActionTypes => ({
  type: INPUT_PASSWORD,
  payload: {
    password
  }
})

export const SendDeleteRequest = (): AccountDeleteActionTypes => ({
  type: SEND_DELETE_REQUEST
})

export const SendDeleteResult = (
  result: AccountDeleteResponse,
  token?: string | null
): AccountDeleteActionTypes => {
  const { data, errors } = result
  console.log('token:', token)
  return {
    type: SEND_DELETE_RESULTED,
    payload: {
      success: data.deleteAccount,
      error: errors ? errors[0].message.message : undefined,
      token
    }
  }
}

export const IsAccountDeleteLoading = (
  isLoading: boolean
): AccountDeleteActionTypes => ({
  type: DELETE_LOADING,
  payload: {
    isLoading
  }
})

export const SuccessAlert = (
  successAlert: boolean | null
): AccountDeleteActionTypes => ({
  type: SUCCESS_ALERT,
  payload: {
    successAlert
  }
})

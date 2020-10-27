import {
  AccountDeleteActionTypes,
  AccountDeleteResulted,
  INPUT_NICKNAME,
  INPUT_EMAIL,
  INPUT_PASSWORD,
  SEND_DELETE_RESULTED
} from './action-type'

interface State {
  nickName: string
  email: string
  password: string
  isLoading: boolean
  successAlert: boolean | null
  token: string | null
  accountDeleteResult: AccountDeleteResulted
}

const initialState: State = {
  nickName: '',
  email: '',
  password: '',
  isLoading: false,
  successAlert: false,
  token: null,
  accountDeleteResult: {
    success: null,
    error: undefined
  }
}

export const DeleteReducer = (
  state = initialState,
  action: AccountDeleteActionTypes
): State => {
  switch (action.type) {
    case INPUT_NICKNAME:
      const { nickName } = action.payload
      return { ...state, nickName }

    case INPUT_EMAIL:
      const { email } = action.payload
      return { ...state, email }

    case INPUT_PASSWORD:
      const { password } = action.payload
      return { ...state, password }

    case SEND_DELETE_RESULTED:
      const { success, error, token } = action.payload
      return { ...state, accountDeleteResult: { success, error, token } }

    default:
      return state
  }
}

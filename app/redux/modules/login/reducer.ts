import {
  LoginResulted,
  LoginActionTypes,
  LOGIN_INPUT_EMAIL,
  LOGIN_INPUT_PASSWORD,
  SEND_LOGIN_RESULTED,
  LOGIN_LOADING,
  LOGIN_SUCCESS_ALERT
} from './action-type'

interface State {
  email: string
  password: string
  isLoading: boolean
  successAlert: boolean | null
  loginResult: LoginResulted
}

const initialState: State = {
  email: '',
  password: '',
  isLoading: false,
  successAlert: null,
  loginResult: {
    success: false,
    error: undefined,
    token: null
  }
}

export const LoginReducer = (
  state = initialState,
  action: LoginActionTypes
): State => {
  switch (action.type) {
    case LOGIN_INPUT_EMAIL:
      const { email } = action.payload
      return { ...state, email }

    case LOGIN_INPUT_PASSWORD:
      const { password } = action.payload
      return { ...state, password }

    case LOGIN_LOADING:
      const { isLoading } = action.payload
      return { ...state, isLoading }

    case SEND_LOGIN_RESULTED:
      const { success, error, token } = action.payload
      return { ...state, loginResult: { success, error, token } }

    case LOGIN_SUCCESS_ALERT:
      const { successAlert } = action.payload
      return { ...state, successAlert }

    default:
      return state
  }
}

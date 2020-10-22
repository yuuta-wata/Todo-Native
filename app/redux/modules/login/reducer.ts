import {
  LoginResulted,
  LoginActionTypes,
  LOGIN_INPUT_EMAIL,
  LOGIN_INPUT_PASSWORD,
  SEND_LOGIN_RESULTED,
  LOGIN_LOADING
} from './action-type'

interface State {
  email: string
  password: string
  isLoading: boolean
  loginResult: LoginResulted
}

const initialState: State = {
  email: '',
  password: '',
  isLoading: false,
  loginResult: {
    success: false,
    error: undefined
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
      const { success, error } = action.payload
      return { ...state, loginResult: { success, error } }

    default:
      return state
  }
}

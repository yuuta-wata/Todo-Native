import {
  LoginResulted,
  TestLoginActionTypes,
  SEND_LOGIN_RESULTED,
  LOGIN_LOADING
} from './action-type'

interface State {
  email: string
  password: string
  isLoading: boolean
  successAlert: boolean | null
  loginResult: LoginResulted
}

const initialState: State = {
  email: 'test@test.com',
  password: 'test',
  isLoading: false,
  successAlert: null,
  loginResult: {
    success: null,
    error: undefined,
    cookie: undefined
  }
}

export const TestLoginReducer = (
  state = initialState,
  action: TestLoginActionTypes
): State => {
  switch (action.type) {
    case LOGIN_LOADING:
      const { isLoading } = action.payload
      return { ...state, isLoading }

    case SEND_LOGIN_RESULTED:
      const { success, error, cookie } = action.payload
      return { ...state, loginResult: { success, error, cookie } }

    default:
      return state
  }
}

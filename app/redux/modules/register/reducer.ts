import {
  RegisterResulted,
  RegisterActionTypes,
  INPUT_NICKNAME,
  INPUT_EMAIL,
  INPUT_PASSWORD,
  SEND_REGISTER_RESULTED
} from './action-type'

interface State {
  nickName: string
  email: string
  password: string
  registerResult: RegisterResulted
}

const initialState: State = {
  nickName: '',
  email: '',
  password: '',
  registerResult: {
    success: false,
    error: undefined
  }
}

export const RegisterReducer = (
  state = initialState,
  action: RegisterActionTypes
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

    case SEND_REGISTER_RESULTED:
      const { success, error } = action.payload
      return { ...state, registerResult: { success, error } }

    default:
      return state
  }
}

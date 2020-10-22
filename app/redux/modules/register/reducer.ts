import {
  RegisterResulted,
  RegisterActionTypes,
  INPUT_NICKNAME,
  INPUT_EMAIL,
  INPUT_PASSWORD,
  SEND_REGISTER_RESULTED,
  REGISTER_LOADING,
  SUCCESS_ALERT,
  EMAIL_UNIQUE_ERROR
} from './action-type'

interface State {
  nickName: string
  email: string
  password: string
  isLoading: boolean
  successAlert: boolean | null
  registerResult: RegisterResulted
  /** WARNING: 一時的な対応、サーバーからのエラーレスポンスのロジックを変更する必要有り。 */
  emailUniqueError: string | object | undefined
}

const initialState: State = {
  nickName: '',
  email: '',
  password: '',
  isLoading: false,
  successAlert: false,
  registerResult: {
    success: false,
    error: undefined
  },
  /** WARNING: 一時的な対応、サーバーからのエラーレスポンスのロジックを変更する必要有り。 */
  emailUniqueError: undefined
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

    case REGISTER_LOADING:
      const { isLoading } = action.payload
      return { ...state, isLoading }

    case SUCCESS_ALERT:
      const { successAlert } = action.payload
      return { ...state, successAlert }

    /** WARNING: 一時的な対応、サーバーからのエラーレスポンスのロジックを変更する必要有り。 */
    case EMAIL_UNIQUE_ERROR:
      const { error: EmailUniqueError } = action.payload
      return { ...state, emailUniqueError: EmailUniqueError }

    default:
      return state
  }
}

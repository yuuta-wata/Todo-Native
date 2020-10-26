import { TokenActionType, SET_ACCESS_TOKEN } from './action-type'

interface State {
  loggedIn: boolean
  accessToken: string | null
}

const initialState: State = {
  loggedIn: false,
  accessToken: null
}

export const TokenReducer = (
  state = initialState,
  action: TokenActionType
): State => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      const { accessToken, loggedIn } = action.payload
      return { ...state, accessToken, loggedIn }

    default:
      return state
  }
}

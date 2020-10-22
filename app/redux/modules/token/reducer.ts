import { TokenActionType, FETCH_REFRESH_TOKEN_RESULTED } from './action-type'

interface State {
  loggedIn: boolean
}

const initialState: State = {
  loggedIn: false
}

export const TokenReducer = (
  state = initialState,
  action: TokenActionType
): State => {
  switch (action.type) {
    case FETCH_REFRESH_TOKEN_RESULTED:
      const { result } = action.payload
      return { ...state, loggedIn: result }

    default:
      return state
  }
}

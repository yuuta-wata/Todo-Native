import { TokenActionType, SET_ACCESS_TOKEN } from './action-type'

interface State {
  accessToken: string | null
}

const initialState: State = {
  accessToken: null
}

export const TokenReducer = (
  state = initialState,
  action: TokenActionType
): State => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      const { accessToken } = action.payload
      return { ...state, accessToken }

    default:
      return state
  }
}

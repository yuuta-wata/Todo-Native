import { combineReducers } from 'redux'

import { RegisterReducer } from './modules/register/reducer'

export const rootReducer = combineReducers({
  register: RegisterReducer
})

export type RootState = ReturnType<typeof rootReducer>

import { combineReducers } from 'redux'

import { LoginReducer } from './login/reducer'
import { RegisterReducer } from './register/reducer'

export const modulesReducer = combineReducers({
  login: LoginReducer,
  register: RegisterReducer
})

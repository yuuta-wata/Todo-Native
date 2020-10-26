import { combineReducers } from 'redux'

import { DeleteReducer } from './delete/reducer'

export const AccountReducer = combineReducers({
  delete: DeleteReducer
})

import { combineReducers } from 'redux'

import { modulesReducer } from './modules/reducer'

export const rootReducer = combineReducers({
  modules: modulesReducer
})

export type RootState = ReturnType<typeof rootReducer>

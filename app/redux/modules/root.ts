import { combineEpics } from 'redux-observable'

import { registerEpic } from './register/epic'

export const rootEpic = combineEpics(registerEpic)

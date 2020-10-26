import { combineEpics } from 'redux-observable'

import { registerEpic } from './register/epic'
import { loginEpic } from './login/epic'
import { tokenEpic } from './token/epic'
import { taskEpic } from './task/epic'
import { accountEpic } from './account/epic'

export const rootEpic = combineEpics(
  registerEpic,
  loginEpic,
  tokenEpic,
  taskEpic,
  accountEpic
)

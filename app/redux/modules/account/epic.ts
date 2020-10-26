import { combineEpics } from 'redux-observable'

import { deleteEpic } from './delete/epic'

export const accountEpic = combineEpics(deleteEpic)

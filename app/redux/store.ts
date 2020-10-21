import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { rootEpic } from './modules/root'
import { rootReducer } from './reducer'

const epicMiddleware = createEpicMiddleware()

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware))
epicMiddleware.run(rootEpic)

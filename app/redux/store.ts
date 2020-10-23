import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { createEpicMiddleware } from 'redux-observable'
import AsyncStorage from '@react-native-community/async-storage'

import { rootEpic } from './modules/rootEpic'

import { rootReducer } from './reducer'

const persistConfig = {
  key: 'TODO_APP',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const epicMiddleware = createEpicMiddleware()

export const store = createStore(
  persistedReducer,
  applyMiddleware(epicMiddleware)
)
export const persistor = persistStore(store)
epicMiddleware.run(rootEpic)

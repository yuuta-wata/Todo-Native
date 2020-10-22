import React, { FC } from 'react'
import { Provider } from 'react-redux'

import Routes from './Routes'

import { store } from '../redux/store'

const Navigation: FC = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default Navigation

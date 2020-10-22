import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import AuthStack from '../AuthStack'
import HomeStack from '../HomeStack'

import { RootState } from '../../redux/reducer'
import { FetchRefreshToken } from '../../redux/modules/token/actions'

const propsSelector = (state: RootState) => ({
  loggedIn: state.modules.token.loggedIn
})

const Routes: FC = () => {
  const dispatch = useDispatch()
  const { loggedIn } = useSelector(propsSelector)

  useEffect(() => {
    dispatch(FetchRefreshToken())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <NavigationContainer>
      {loggedIn ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Routes

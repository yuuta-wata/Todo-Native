import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import { RootState } from '../../redux/reducer'
import { FetchRefreshToken } from '../../redux/modules/token/actions'

import AuthStack from '../AuthStack'
import HomeStack from '../MainStack'

const propsSelector = (state: RootState) => ({
  loggedIn: state.modules.token.loggedIn,
  accessToken: state.modules.token.accessToken
})

const Routes: FC = () => {
  const dispatch = useDispatch()
  const { loggedIn, accessToken } = useSelector(propsSelector)

  useEffect(() => {
    dispatch(FetchRefreshToken())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log('accessToken:', accessToken)
  console.log('loggedIn:', loggedIn)

  return (
    <NavigationContainer>
      {loggedIn ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Routes

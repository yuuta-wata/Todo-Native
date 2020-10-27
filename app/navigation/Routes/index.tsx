import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import { RootState } from '../../redux/reducer'
import { FetchRefreshToken } from '../../redux/modules/token/actions'

import AuthStack from '../AuthStack'
import HomeStack from '../MainStack'

const propsSelector = (state: RootState) => ({
  accessToken: state.modules.token.accessToken
})

const Routes: FC = () => {
  const dispatch = useDispatch()
  const { accessToken } = useSelector(propsSelector)

  useEffect(() => {
    dispatch(FetchRefreshToken())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <NavigationContainer>
      {accessToken ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Routes

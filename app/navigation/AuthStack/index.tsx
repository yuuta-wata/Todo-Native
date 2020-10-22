import React, { FC } from 'react'
import { Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import TopScreen from '../../screen/TopScreen'
import RegisterScreen from '../../screen/RegisterScreen'
import LoginScreen from '../../screen/LoginScreen'

import { AuthParamList } from './type'

const Stack = createStackNavigator<AuthParamList>()

const AuthStack: FC = () => {
  const { height } = Dimensions.get('window')
  return (
    <Stack.Navigator initialRouteName="TopScreen">
      <Stack.Screen
        name="TopScreen"
        options={{ headerShown: false }}
        component={TopScreen}
      />
      <Stack.Screen
        name="RegisterScreen"
        options={{
          headerTintColor: '#EBEBEB',
          headerTitle: '新規登録',
          headerTitleStyle: {
            color: '#EBEBEB',
            fontSize: height * 0.03
          },
          headerBackTitle: 'TOP画面',
          headerBackTitleStyle: {
            color: '#EBEBEB'
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#EBEBEB',
            backgroundColor: '#2B6187'
          }
        }}
        component={RegisterScreen}
      />
      <Stack.Screen
        name="LoginScreen"
        options={{
          headerTintColor: '#EBEBEB',
          headerTitle: 'ログイン',
          headerTitleStyle: {
            color: '#EBEBEB',
            fontSize: height * 0.03
          },
          headerBackTitle: 'TOP画面',
          headerBackTitleStyle: {
            color: '#EBEBEB'
          },
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#EBEBEB',
            backgroundColor: '#2B6187'
          }
        }}
        component={LoginScreen}
      />
    </Stack.Navigator>
  )
}

export default AuthStack

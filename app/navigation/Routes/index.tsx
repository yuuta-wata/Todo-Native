import React, { FC } from 'react'
import { Dimensions } from 'react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TopScreen from '../../screen/TopScreen'
import RegisterScreen from '../../screen/RegisterScreen'

import { store } from '../../redux/store'
import { ParamList } from './type'
import LoginScreen from '../../screen/LoginScreen'

const Stack = createStackNavigator<ParamList>()

const Routes: FC = () => {
  const { height } = Dimensions.get('window')
  return (
    <Provider store={store}>
      <NavigationContainer>
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
      </NavigationContainer>
    </Provider>
  )
}

export default Routes

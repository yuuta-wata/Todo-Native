import React, { FC } from 'react'
import { Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../../screen/HomeScreen'
import PostScreen from '../../screen/PostScreen'

import { HomeParamList } from './type'

const Stack = createStackNavigator<HomeParamList>()

const HomeStack: FC = () => {
  const { height } = Dimensions.get('window')

  return (
    <Stack.Navigator initialRouteName="HomeScreen" mode="modal">
      <Stack.Screen
        name="HomeScreen"
        options={{
          headerTintColor: '#EBEBEB',
          headerTitle: 'ホーム',
          headerTitleStyle: {
            color: '#EBEBEB',
            fontSize: height * 0.03
          },
          headerLeft: undefined,
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#EBEBEB',
            backgroundColor: '#2B6187'
          }
        }}
        component={HomeScreen}
      />
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack

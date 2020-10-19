import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TopScreen from '../../screen/TopScreen'

const Stack = createStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Top"
        options={{ headerShown: false }}
        component={TopScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes

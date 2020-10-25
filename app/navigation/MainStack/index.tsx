import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'

import HomeScreen from '../../screen/HomeScreen'
import PostScreen from '../../screen/PostScreen'

import { DrawerParamList, HomeParamList } from './type'

const Home = createStackNavigator<HomeParamList>()
const Drawer = createDrawerNavigator<DrawerParamList>()

const HomeStack = (props: DrawerContentComponentProps) => (
  <Home.Navigator mode="modal">
    <Home.Screen
      name="HomeScreen"
      initialParams={{ props }}
      component={HomeScreen}
    />
    <Home.Screen name="PostScreen" component={PostScreen} />
  </Home.Navigator>
)

const CustomDrawerContent = (props: DrawerContentComponentProps) => (
  <DrawerContentScrollView>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
)

const MainStack: FC = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerStyle={{
      backgroundColor: '#2d6187',
      borderRightColor: '#EBEBEB',
      borderRightWidth: 1
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={HomeStack} />
  </Drawer.Navigator>
)

export default MainStack

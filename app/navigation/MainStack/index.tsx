import React, { FC } from 'react'
import { Dimensions, SafeAreaView, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView
} from '@react-navigation/drawer'

import { LogoutRequest } from '../../redux/modules/logout/actions'
import Button from '../../components/common/Button'
import Header from '../../components/common/Header'
import HomeScreen from '../../screen/HomeScreen'
import PostScreen from '../../screen/PostScreen'
import AccountDeleteScreen from '../../screen/AccountDeleteScreen'

import { DrawerParamList, HomeParamList } from './type'

const Home = createStackNavigator<HomeParamList>()
const Drawer = createDrawerNavigator<DrawerParamList>()

const HomeStack = ({ navigation }: DrawerContentComponentProps) => {
  const { height } = Dimensions.get('window')

  return (
    <Home.Navigator mode="modal">
      <Home.Screen
        name="HomeScreen"
        options={{
          header: () => (
            <>
              <SafeAreaView
                style={{
                  backgroundColor: '#2B6187'
                }}
              />
              <Header
                hambugerStyle={{
                  marginLeft: height * 0.03
                }}
                hamburgerPress={() => navigation.openDrawer()}
                headerCenter={
                  <Text
                    style={{
                      color: '#EBEBEB',
                      fontSize: height * 0.03,
                      fontWeight: '600'
                    }}>
                    ホーム
                  </Text>
                }
                headerCenterContainer={{
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
            </>
          )
        }}
        component={HomeScreen}
      />
      <Home.Screen name="PostScreen" component={PostScreen} />
    </Home.Navigator>
  )
}

const CustomDrawerContent: FC<DrawerContentComponentProps> = ({
  navigation
}) => {
  const dispatch = useDispatch()
  const { height } = Dimensions.get('window')
  // ButtonSize
  const buttonHeight = height * 0.05

  return (
    <DrawerContentScrollView>
      <Button
        style={{
          height: buttonHeight,
          marginBottom: buttonHeight * 0.3,
          alignItems: 'flex-start',
          paddingLeft: height * 0.02
        }}
        title="ホーム"
        textStyle={{
          color: '#28abb9',
          fontSize: buttonHeight * 0.5,
          fontWeight: '600'
        }}
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        style={{
          height: buttonHeight,
          marginBottom: buttonHeight * 0.3,
          alignItems: 'flex-start',
          paddingLeft: height * 0.02
        }}
        title="アカウント削除"
        textStyle={{
          color: '#28abb9',
          fontSize: buttonHeight * 0.5,
          fontWeight: '600'
        }}
        onPress={() => navigation.navigate('AccountDeleteScreen')}
      />
      <Button
        style={{
          height: buttonHeight,
          marginBottom: buttonHeight * 0.3,
          alignItems: 'flex-start',
          paddingLeft: height * 0.02
        }}
        title="ログアウト"
        textStyle={{
          color: '#28abb9',
          fontSize: buttonHeight * 0.5,
          fontWeight: '600'
        }}
        onPress={() => dispatch(LogoutRequest())}
      />
    </DrawerContentScrollView>
  )
}

const MainStack: FC = () => {
  const { height } = Dimensions.get('window')

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: '#2d6187',
        borderRightColor: '#EBEBEB',
        borderRightWidth: 1,
        paddingVertical: height * 0.05
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen
        name="AccountDeleteScreen"
        component={AccountDeleteScreen}
      />
    </Drawer.Navigator>
  )
}

export default MainStack

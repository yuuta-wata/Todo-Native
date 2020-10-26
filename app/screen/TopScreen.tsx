import React, { FC } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Alert
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { TestLoginRequest } from '../redux/modules/login/testUser/actions'
import { propsSelector } from '../redux/modules/login/testUser/selector'
import { GetAccessToken } from '../redux/modules/token/actions'
import Button from '../components/common/Button'

const TopScreen: FC = () => {
  const dispatch = useDispatch()
  const { testLoginResulted } = useSelector(propsSelector)
  const { width, height } = Dimensions.get('window')
  const navigation = useNavigation()

  // buttonSize
  const buttonWidth = width * 0.8
  const buttonHeight = height * 0.07
  const buttonTitleSize = height * 0.025
  // headingSize
  const headingFontSize = height * 0.07

  if (testLoginResulted && testLoginResulted.success) {
    Alert.alert('ログインしました！', undefined, [
      {
        text: 'OK',
        onPress: () => {
          // dispatch(LoginSuccessAlert(false))
          dispatch(
            GetAccessToken(
              testLoginResulted.success,
              !!testLoginResulted.success
            )
          )
          // dispatch(LoginVerify({ data: { login: null }, errors: undefined }))
        }
      }
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={[styles.box, { flex: 1 }]}>
          <Text style={[styles.heading, { fontSize: headingFontSize }]}>
            TODO APP
          </Text>
        </View>
        <View style={[styles.box, { flex: 2, justifyContent: 'flex-start' }]}>
          <Button
            style={[
              styles.button,
              {
                width: buttonWidth,
                height: buttonHeight,
                marginBottom: buttonHeight * 0.2
              }
            ]}
            textStyle={[styles.buttonTitle, { fontSize: buttonTitleSize }]}
            title="ログイン"
            onPress={() => navigation.navigate('LoginScreen')}
          />
          <Button
            style={[
              styles.button,
              {
                width: buttonWidth,
                height: buttonHeight,
                marginBottom: buttonHeight * 0.2
              }
            ]}
            textStyle={[styles.buttonTitle, { fontSize: buttonTitleSize }]}
            title="新規登録"
            onPress={() => {
              navigation.navigate('RegisterScreen')
            }}
          />
          <Button
            style={[
              styles.button,
              { width: buttonWidth, height: buttonHeight }
            ]}
            textStyle={[styles.buttonTitle, { fontSize: buttonTitleSize }]}
            title="テストユーザーログイン"
            onPress={() => dispatch(TestLoginRequest())}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d6187'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2d6187'
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    color: '#EBEBEB',
    fontWeight: '700',
    letterSpacing: 3
  },
  button: {
    borderWidth: 3,
    borderColor: '#EBEBEB',
    backgroundColor: '#28abb9'
  },
  buttonTitle: {
    color: '#EBEBEB',
    fontWeight: '600',
    letterSpacing: 3
  }
})

export default TopScreen

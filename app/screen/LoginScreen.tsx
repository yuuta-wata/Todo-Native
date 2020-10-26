import React, { FC, useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  Alert
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import {
  ChangeLoginEmail,
  ChangeLoginPassword,
  IsLoginLoading,
  SendLoginData,
  LoginSuccessAlert,
  LoginVerify
} from '../redux/modules/login/actions'
import { SetAccessToken } from '../redux/modules/token/actions'
import { RootState } from '../redux/reducer'

import Button from '../components/common/Button'

const propsSelector = (state: RootState) => ({
  email: state.modules.login.email,
  password: state.modules.login.password,
  isLoading: state.modules.login.isLoading,
  loginResulted: state.modules.login.loginResult,
  successAlert: state.modules.login.successAlert
})

const LoginScreen: FC = () => {
  const dispatch = useDispatch()
  const {
    email,
    password,
    isLoading,
    loginResulted,
    successAlert
  } = useSelector(propsSelector)
  const { width, height } = Dimensions.get('window')
  // inputSize
  const inputWidth = width * 0.8
  const inputHeight = height * 0.04
  const inputFontSize = height * 0.02
  // headingSize
  const headingFontSize = height * 0.03

  const error = loginResulted.error

  useEffect(() => {
    dispatch(IsLoginLoading(false))
    dispatch(LoginSuccessAlert(!!loginResulted.success))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginResulted])

  useEffect(() => {
    dispatch(LoginSuccessAlert(false))
    dispatch(ChangeLoginEmail(''))
    dispatch(ChangeLoginPassword(''))
    dispatch(LoginVerify({ data: { login: null }, errors: undefined }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (successAlert) {
    Alert.alert('ログインしました！', undefined, [
      {
        text: 'OK',
        onPress: () => {
          dispatch(LoginSuccessAlert(false))
          dispatch(SetAccessToken(loginResulted.token, loginResulted.success))
          dispatch(LoginVerify({ data: { login: null }, errors: undefined }))
        }
      }
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={-height}
        // eslint-disable-next-line eqeqeq
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.keyboard}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[styles.wrapper]}>
            <View
              style={[styles.box, { flex: 1, paddingHorizontal: width * 0.1 }]}>
              <Text style={[styles.heading, { fontSize: headingFontSize }]}>
                ログインするにはアカウント情報を入力してください。
              </Text>
            </View>
            <View
              style={[styles.box, { flex: 3, justifyContent: 'flex-start' }]}>
              <Text
                style={[
                  styles.errorMessage,
                  {
                    width: inputWidth,
                    height: inputHeight * 0.9,
                    fontSize: inputFontSize * 0.8,
                    paddingVertical: inputHeight * 0.2
                  }
                ]}>
                {error && error}
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    width: inputWidth,
                    height: inputHeight,
                    fontSize: inputFontSize
                  }
                ]}
                placeholder="Eメール"
                placeholderTextColor="rgba(235, 235, 235, 0.5)"
                autoCapitalize="none"
                selectionColor={'#9ba4b4'}
                onChangeText={text => dispatch(ChangeLoginEmail(text))}
              />
              <TextInput
                style={[
                  styles.input,
                  {
                    width: inputWidth,
                    height: inputHeight,
                    fontSize: inputFontSize,
                    marginTop: inputHeight
                  }
                ]}
                placeholder="パスワード"
                placeholderTextColor="rgba(235, 235, 235, 0.5)"
                secureTextEntry={true}
                autoCapitalize="none"
                maxLength={16}
                selectionColor={'#9ba4b4'}
                onChangeText={text => dispatch(ChangeLoginPassword(text))}
              />
              <Button
                style={[
                  styles.button,
                  {
                    width: inputWidth,
                    height: inputHeight * 1.5,
                    marginTop: inputHeight * 1.5
                  }
                ]}
                title="ログイン"
                textStyle={[
                  styles.buttonTitle,
                  { fontSize: inputHeight * 1.5 * 0.4 }
                ]}
                disabled={isLoading}
                onPress={() => {
                  Keyboard.dismiss()
                  dispatch(IsLoginLoading(true))
                  dispatch(SendLoginData(email, password))
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d6187'
  },
  keyboard: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2d6187'
  },
  box: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    color: '#EBEBEB',
    fontWeight: '700',
    letterSpacing: 3
  },
  input: {
    color: '#EBEBEB',
    borderColor: '#EBEBEB',
    borderWidth: 1,
    textAlign: 'center',
    fontWeight: '700'
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
  },
  errorMessage: {
    color: '#F6830F',
    textAlign: 'left',
    fontWeight: '700'
  }
})

export default LoginScreen

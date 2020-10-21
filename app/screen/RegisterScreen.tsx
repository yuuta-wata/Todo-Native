import React, { FC, useEffect, useState } from 'react'
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
import { useNavigation } from '@react-navigation/native'

import Button from '../components/Button'

import { ErrorPropertyType } from '../redux/modules/register/action-type'
import {
  ChangeNickname,
  ChangeEmail,
  ChangePassword,
  SendRegisterData
} from '../redux/modules/register/actions'
import { RootState } from '../redux/reducer'

const propsSelector = (state: RootState) => ({
  nickname: state.register.nickName,
  email: state.register.email,
  password: state.register.password,
  registerResulted: state.register.registerResult
})

const RegisterScreen: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [successAlert, setSuccessAlert] = useState<boolean | null>(false)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { nickname, email, password, registerResulted } = useSelector(
    propsSelector
  )
  const { width, height } = Dimensions.get('window')
  // inputSize
  const inputWidth = width * 0.8
  const inputHeight = height * 0.04
  const inputFontSize = height * 0.02
  // headingSize
  const headingFontSize = height * 0.03

  const error =
    registerResulted.error &&
    registerResulted.error.map((x) => {
      switch (x.property) {
        case ErrorPropertyType.NICKNAME: {
          return {
            prop: x.property,
            mes: x.constraints.length
          }
        }

        case ErrorPropertyType.EMAIL: {
          return {
            prop: x.property,
            mes: x.constraints.isEmail
          }
        }

        case ErrorPropertyType.PASSWORD: {
          return {
            prop: x.property,
            mes: x.constraints.length
          }
        }
      }
    })

  useEffect(() => {
    setLoading(false)
    setSuccessAlert(registerResulted.success)
  }, [registerResulted.success])

  useEffect(() => {
    setSuccessAlert(false)
    setLoading(false)
  }, [])

  if (successAlert) {
    Alert.alert('アカウントを作成しました', 'ログインしてください', [
      {
        text: 'OK',
        onPress: () => {
          setSuccessAlert(false)
          navigation.navigate('TopScreen')
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
                アカウントを作成するには必要事項を入力してください。
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
                {error &&
                  error.find(({ prop }) => prop === ErrorPropertyType.NICKNAME)
                    ?.mes}
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
                placeholder="ニックネーム"
                placeholderTextColor="rgba(235, 235, 235, 0.5)"
                autoCapitalize="none"
                maxLength={20}
                selectionColor={'#9ba4b4'}
                onChangeText={(text) => dispatch(ChangeNickname(text))}
              />
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
                {error &&
                  error.find(({ prop }) => prop === ErrorPropertyType.EMAIL)
                    ?.mes}
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
                onChangeText={(text) => dispatch(ChangeEmail(text))}
              />
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
                {error &&
                  error.find(({ prop }) => prop === ErrorPropertyType.PASSWORD)
                    ?.mes}
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
                placeholder="パスワード"
                placeholderTextColor="rgba(235, 235, 235, 0.5)"
                secureTextEntry={true}
                autoCapitalize="none"
                maxLength={16}
                selectionColor={'#9ba4b4'}
                onChangeText={(text) => dispatch(ChangePassword(text))}
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
                title="アカウント作成"
                textStyle={[
                  styles.buttonTitle,
                  { fontSize: inputHeight * 1.5 * 0.4 }
                ]}
                disabled={loading}
                onPress={() => {
                  Keyboard.dismiss()
                  setLoading(true)
                  dispatch(SendRegisterData(nickname, email, password))
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

export default RegisterScreen

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
  Platform
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { DrawerContentComponentProps } from '@react-navigation/drawer'

import {
  ChangeNickname,
  ChangeEmail,
  ChangePassword,
  SendDeleteResult,
  SendDeleteRequest
} from '../redux/modules/account/delete/actions'
import { propsSelector } from '../redux/modules/account/delete/selector'

import Button from '../components/common/Button'
import Header from '../components/common/Header'

const AccountDeleteScreen: FC<DrawerContentComponentProps> = ({
  navigation
}) => {
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector(propsSelector)
  const { width, height } = Dimensions.get('window')
  // inputSize
  const inputWidth = width * 0.8
  const inputHeight = height * 0.04
  const inputFontSize = height * 0.02
  // headingSize
  const headingFontSize = height * 0.03

  useEffect(() => {
    dispatch(ChangeNickname(''))
    dispatch(ChangeEmail(''))
    dispatch(ChangePassword(''))
    dispatch(
      SendDeleteResult({ data: { deleteAccount: false }, errors: undefined })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header
        hambugerStyle={{
          marginLeft: height * 0.03
        }}
        hamburgerPress={() => navigation.openDrawer()}
      />
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
                アカウントを削除するには必要事項を入力してください。
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
                    fontSize: inputFontSize,
                    marginBottom: inputHeight * 0.5
                  }
                ]}
                placeholder="ニックネーム"
                placeholderTextColor="rgba(235, 235, 235, 0.5)"
                autoCapitalize="none"
                maxLength={20}
                selectionColor={'#9ba4b4'}
                onChangeText={text => dispatch(ChangeNickname(text))}
              />
              <TextInput
                style={[
                  styles.input,
                  {
                    width: inputWidth,
                    height: inputHeight,
                    fontSize: inputFontSize,
                    marginBottom: inputHeight * 0.5
                  }
                ]}
                placeholder="Eメール"
                placeholderTextColor="rgba(235, 235, 235, 0.5)"
                autoCapitalize="none"
                selectionColor={'#9ba4b4'}
                onChangeText={text => dispatch(ChangeEmail(text))}
              />
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
                onChangeText={text => dispatch(ChangePassword(text))}
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
                title="アカウントを削除"
                textStyle={[
                  styles.buttonTitle,
                  { fontSize: inputHeight * 1.5 * 0.4 }
                ]}
                disabled={isLoading}
                onPress={() => {
                  Keyboard.dismiss()
                  // dispatch(IsRegisterLoading(true))
                  dispatch(SendDeleteRequest())
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

export default AccountDeleteScreen

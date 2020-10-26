import React, { FC, useEffect, useLayoutEffect } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  Text
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { HomeNavigationProps } from '../navigation/MainStack/type'
import { AddTask, ChangeTask } from '../redux/modules/task/actions'
import { propsSelector } from '../redux/modules/task/selector'
import Button from '../components/common/Button'

const PostScreen: FC = () => {
  const dispatch = useDispatch()
  const { task } = useSelector(propsSelector)
  const navigation = useNavigation<HomeNavigationProps<'PostScreen'>>()

  const { height, width } = Dimensions.get('window')
  // inputSize
  const inputHeight = height * 0.06
  const inputFontSize = height * 0.02
  // addTaskButtonSize
  const addTaskButtonWidth = height * 0.15
  const addTaskButtonHeight = addTaskButtonWidth * 0.2

  const characterCount = task ? task.trim().length : 0
  const buttonDisabled = characterCount === 0

  useLayoutEffect(
    () => {
      navigation.setOptions({
        headerTintColor: '#EBEBEB',
        headerTitle: () => null,
        headerBackTitle: 'キャンセル',
        headerBackImage: () => null,
        headerRight: () => (
          <Button
            style={{
              width: addTaskButtonWidth,
              height: addTaskButtonHeight,
              borderWidth: 1,
              borderRadius: addTaskButtonWidth * 2,
              borderColor: '#EBEBEB',
              backgroundColor: '#28abb9',
              marginRight: height * 0.01,
              opacity: buttonDisabled ? 0.5 : 1
            }}
            title="リストに追加"
            textStyle={{
              color: '#EBEBEB',
              fontSize: height * 0.018
            }}
            onPress={() => {
              dispatch(AddTask())
              navigation.goBack()
            }}
            disabled={buttonDisabled}
          />
        ),
        headerBackTitleStyle: {
          paddingLeft: height * 0.01
        },
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#EBEBEB',
          backgroundColor: '#2B6187'
        }
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [navigation, buttonDisabled]
  )

  useEffect(() => {
    dispatch(ChangeTask(''))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              style={[
                styles.box,
                {
                  paddingHorizontal: width * 0.05
                }
              ]}>
              <TextInput
                style={[
                  styles.input,
                  {
                    height: inputHeight,
                    fontSize: inputFontSize
                  }
                ]}
                placeholder="今日は何をする？"
                placeholderTextColor="rgba(235, 235, 235, 0.5)"
                autoCapitalize="none"
                maxLength={25}
                selectionColor={'#88d3db'}
                onChangeText={text => dispatch(ChangeTask(text))}
              />
            </View>
            <Text
              style={{
                color: characterCount < 20 ? '#FFFFFF' : '#F6830F',
                marginRight: width * 0.05
              }}>
              {characterCount}/25
            </Text>
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
    alignItems: 'flex-end',
    backgroundColor: '#2d6187'
  },
  box: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#EBEBEB'
  },
  input: {
    color: '#EBEBEB',
    textAlign: 'left',
    fontWeight: '700'
  }
})

export default PostScreen

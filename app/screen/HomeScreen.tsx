import React, { FC, useEffect } from 'react'
import { Alert, SafeAreaView, StyleSheet, View, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { FetchTaskListAction } from '../redux/modules/task/actions'
import AddButton from '../components/home/AddButton'
import TaskList from '../components/home/TaskList'
import { propsSelector } from '../redux/modules/task/selector'

const HomeScreen: FC = () => {
  const dispatch = useDispatch()
  const { error } = useSelector(propsSelector)
  const navigation = useNavigation()

  const { height, width } = Dimensions.get('window')
  // AddButtonSize
  const addButtonSize = height * 0.08

  useEffect(() => {
    dispatch(FetchTaskListAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 通常このエラーアラートが発動することは無い
  if (error) {
    Alert.alert(error, undefined, [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('TopScreen')
        }
      }
    ])
  }
  return (
    <>
      <View style={styles.container}>
        <TaskList style={styles.list} />
      </View>
      <AddButton
        style={[
          styles.addButton,
          {
            width: addButtonSize,
            height: addButtonSize,
            bottom: height * 0.08,
            right: width * 0.1,
            borderRadius: addButtonSize * 2
          }
        ]}
        iconStyle={{
          width: addButtonSize * 0.5,
          height: addButtonSize * 0.5
        }}
        onPress={() => {
          navigation.navigate('PostScreen')
        }}
      />
      <SafeAreaView style={styles.safeArea} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d6187'
  },
  list: {
    flex: 1
  },
  addButton: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    backgroundColor: '#88d3db'
  },
  addButtonText: {
    color: '#EBEBEB',
    fontWeight: '500'
  },
  safeArea: {
    backgroundColor: '#2d6187'
  }
})

export default HomeScreen

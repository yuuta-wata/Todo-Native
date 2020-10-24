import React, { FC, useEffect } from 'react'
import { Alert, SafeAreaView, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { FetchTaskListAction } from '../redux/modules/task/actions'
import Button from '../components/common/Button'
import TaskList from '../components/home/TaskList'
import { propsSelector } from '../redux/modules/task/selector'

const HomeScreen: FC = () => {
  const dispatch = useDispatch()
  const { error } = useSelector(propsSelector)
  const navigation = useNavigation()

  useEffect(() => {
    dispatch(FetchTaskListAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
  safeArea: {
    backgroundColor: '#2d6187'
  }
})

export default HomeScreen

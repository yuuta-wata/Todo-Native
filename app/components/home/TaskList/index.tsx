import React, { FC, useCallback } from 'react'
import { FlatList, Dimensions, RefreshControl, View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { propsSelector } from '../../../redux/modules/task/selector'
import {
  TaskLoading,
  FetchTaskListAction
} from '../../../redux/modules/task/actions'

import TaskItem from './TaskItem'
import { Props } from './type'

const TaskList: FC<Props> = ({ style }) => {
  const dispatch = useDispatch()
  const { taskList, isLoading } = useSelector(propsSelector)
  const { width, height } = Dimensions.get('window')
  // TaskItemSize
  const taskItemHeight = height * 0.15

  const onRefresh = useCallback(() => {
    dispatch(TaskLoading())
    dispatch(FetchTaskListAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <FlatList
      style={style}
      data={
        taskList &&
        taskList.sort((taskA, taskB) => (taskA.id < taskB.id ? 1 : -1))
      }
      renderItem={({ item }) => (
        <TaskItem
          style={{
            width: width,
            height: taskItemHeight,
            paddingHorizontal: width * 0.05,
            paddingVertical: height * 0.05
          }}
          textStyle={{ fontSize: height * 0.02 }}
          title={item.title}
        />
      )}
      ListEmptyComponent={() => (
        <View
          style={{
            width,
            height: taskItemHeight,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2d6187'
          }}>
          <Text
            style={{
              color: '#88d3db',
              fontSize: height * 0.02,
              fontWeight: '600'
            }}>
            やることを追加しよう！！
          </Text>
        </View>
      )}
      ListFooterComponent={() => (
        <View style={{ width, height: taskItemHeight }} />
      )}
      keyExtractor={item => item.id}
      refreshControl={
        <RefreshControl
          style={{
            backgroundColor: '#145374'
          }}
          colors={['#9ba4b4', '#9ba4b4', '#9ba4b4']}
          tintColor="#9ba4b4"
          refreshing={isLoading}
          onRefresh={onRefresh}
        />
      }
    />
  )
}

export default TaskList

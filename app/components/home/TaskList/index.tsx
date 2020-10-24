import React, { FC, useCallback } from 'react'
import { FlatList, Dimensions, RefreshControl } from 'react-native'
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

  const onRefresh = useCallback(() => {
    dispatch(TaskLoading())
    dispatch(FetchTaskListAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <FlatList
      style={style}
      data={taskList}
      renderItem={({ item }) => (
        <TaskItem
          style={{
            width: width,
            height: height * 0.15,
            paddingHorizontal: width * 0.05,
            paddingVertical: height * 0.05
          }}
          textStyle={{ fontSize: height * 0.02 }}
          title={item.title}
        />
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

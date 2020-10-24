import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Props } from './type'

const TaskItem: FC<Props> = ({ style, textStyle, title }) => (
  <View style={[styles.container, style]}>
    <Text
      style={[styles.text, textStyle]}
      ellipsizeMode="tail"
      numberOfLines={3}>
      {title}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(235, 235, 235, 0.5)',
    backgroundColor: '#2d6187'
  },
  text: {
    color: '#EBEBEB',
    fontWeight: '500'
  }
})

export default TaskItem

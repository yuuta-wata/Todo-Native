import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DoneButton from '../../../common/Button'

import { Props } from './type'

const TaskItem: FC<Props> = ({
  style,
  textStyle,
  buttonStyle,
  title,
  disabled,
  onPress
}) => (
  <View style={[styles.container, style]}>
    <View style={[styles.doneButtonContainer]}>
      <DoneButton
        style={[
          styles.doneButton,
          { opacity: disabled ? 0.5 : 1 },
          buttonStyle
        ]}
        title="完了"
        textStyle={styles.doneButtonText}
        disabled={disabled}
        onPress={onPress}
      />
    </View>
    <View style={[styles.textContainer]}>
      <Text
        style={[styles.text, textStyle]}
        ellipsizeMode="tail"
        numberOfLines={3}>
        {title}
      </Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(235, 235, 235, 0.5)',
    backgroundColor: '#2d6187'
  },
  text: {
    color: '#EBEBEB',
    fontWeight: '500'
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  doneButton: {
    borderWidth: 1,
    borderColor: 'rgba(190, 190, 190, 0.2)'
  },
  doneButtonText: {
    color: '#EBEBEB'
  },
  doneButtonContainer: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
})

export default TaskItem

import React, { FC } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import { Props } from './type'

const Button: FC<Props> = ({ style, textStyle, title, onPress }) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text style={textStyle}>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Button

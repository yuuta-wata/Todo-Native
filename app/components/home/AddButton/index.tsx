import React, { FC } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

import { Props } from './type'

const AddButton: FC<Props> = ({ style, iconStyle, onPress }) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Image
      style={iconStyle}
      resizeMode="contain"
      source={require('./images/quill_pan.png')}
    />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AddButton

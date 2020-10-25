import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { Props } from './type'

const HamburgerButton: FC<Props> = ({ style, hamburgerStyle, onPress }) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <View style={[styles.hamburger, hamburgerStyle]} />
    <View style={[styles.hamburger, hamburgerStyle]} />
    <View style={[styles.hamburger, hamburgerStyle]} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column'
  },
  hamburger: {
    backgroundColor: '#9ba4b4'
  }
})

export default HamburgerButton

import React, { FC } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'

import HamburgerButton from '../HamburgerButton'

import { Props } from './type'

const Header: FC<Props> = ({
  style,
  hambugerStyle,
  headerLeftContainer,
  headerCenter,
  headerCenterContainer,
  headerRight,
  headerRightContainer,
  hamburgerPress
}) => {
  const { height } = Dimensions.get('window')
  // HambrugerSize
  const hambrugerSize = height * 0.04
  return (
    <View style={[styles.container, { paddingBottom: height * 0.01 }, style]}>
      <View style={[styles.box, headerLeftContainer]}>
        <HamburgerButton
          style={[
            {
              width: hambrugerSize,
              height: hambrugerSize
            },
            hambugerStyle
          ]}
          hamburgerStyle={{
            width: hambrugerSize * 0.8,
            height: hambrugerSize * 0.1,
            borderRadius: hambrugerSize * 0.8 * 2
          }}
          onPress={hamburgerPress}
        />
      </View>
      <View style={[styles.box, headerCenterContainer]}>{headerCenter}</View>
      <View style={[styles.box, headerRightContainer]}>{headerRight}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#2B6187',
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBEB'
  },
  box: {
    flex: 1,
    flexDirection: 'row'
  }
})

export default Header

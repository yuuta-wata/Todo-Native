import React, { FC } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const HomeScreen: FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
      <SafeAreaView />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomeScreen

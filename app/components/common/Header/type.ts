import { ReactElement } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export interface Props {
  style?: StyleProp<ViewStyle>
  hambugerStyle?: StyleProp<ViewStyle>
  headerLeftContainer?: StyleProp<ViewStyle>
  headerCenter?: ReactElement
  headerCenterContainer?: StyleProp<ViewStyle>
  headerRight?: ReactElement
  headerRightContainer?: StyleProp<ViewStyle>
  hamburgerPress: () => any
}

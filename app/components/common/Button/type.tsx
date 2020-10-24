import { StyleProp, TextStyle, ViewStyle } from 'react-native'

export interface Props {
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  title: string
  disabled?: boolean
  onPress: () => any
}

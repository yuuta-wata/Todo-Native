import { StyleProp, TextStyle, ViewStyle } from 'react-native'

export interface Props {
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  buttonStyle?: StyleProp<ViewStyle>
  title: string
  disabled?: boolean
  onPress: () => any
}

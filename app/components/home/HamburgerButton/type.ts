import { StyleProp, ViewStyle } from 'react-native'

export interface Props {
  style?: StyleProp<ViewStyle>
  hamburgerStyle?: StyleProp<ViewStyle>
  onPress: () => any
}

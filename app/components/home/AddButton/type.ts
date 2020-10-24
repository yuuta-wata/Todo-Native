import { ImageStyle, StyleProp, ViewStyle } from 'react-native'

export interface Props {
  style?: StyleProp<ViewStyle>
  iconStyle: StyleProp<ImageStyle>
  onPress: () => any
}

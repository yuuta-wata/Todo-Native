import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type AuthParamList = {
  TopScreen: undefined
  RegisterScreen: undefined
  LoginScreen: undefined
}

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>
  route: RouteProp<AuthParamList, T>
}

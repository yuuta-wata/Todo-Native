import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type ParamList = {
  TopScreen: undefined
  RegisterScreen: undefined
  LoginScreen: undefined
}

export type NavProps<T extends keyof ParamList> = {
  navigation: StackNavigationProp<ParamList, T>
  route: RouteProp<ParamList, T>
}

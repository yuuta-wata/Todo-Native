import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type DrawerParamList = {
  Home: undefined
  AccountDeleteScreen: undefined
}

export type HomeParamList = {
  HomeScreen: undefined
  PostScreen: undefined
}

export type HomeRouteProps<T extends keyof HomeParamList> = RouteProp<
  HomeParamList,
  T
>

export type HomeNavigationProps<
  T extends keyof HomeParamList
> = StackNavigationProp<HomeParamList, T>

import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { DrawerContentComponentProps } from '@react-navigation/drawer'

export type DrawerParamList = {
  Home: undefined
}

export type HomeParamList = {
  HomeScreen: { props: DrawerContentComponentProps } | undefined
  PostScreen: undefined
}

export type HomeRouteProps<T extends keyof HomeParamList> = RouteProp<
  HomeParamList,
  T
>

export type HomeNavigationProps<
  T extends keyof HomeParamList
> = StackNavigationProp<HomeParamList, T>

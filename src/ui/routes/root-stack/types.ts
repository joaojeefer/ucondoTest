import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamList = {
   Home: undefined
   Details: { code: string } | undefined
}

export type AccountsListNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

export type DetailsNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>
export type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>

export type UseNavigationProp = NativeStackNavigationProp<RootStackParamList>
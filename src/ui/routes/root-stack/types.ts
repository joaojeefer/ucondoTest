import { RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamList = {
   Home: undefined
   Details: { code: string } | undefined
}

export type AccountsListNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

export type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>
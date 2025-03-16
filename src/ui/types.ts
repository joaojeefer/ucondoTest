import { RouteProp } from "@react-navigation/native"

export type RootStackParamList = {
   Home: undefined
   Details: { code: string } | undefined
}

export type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>
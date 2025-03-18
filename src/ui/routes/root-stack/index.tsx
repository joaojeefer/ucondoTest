import React from "react"
import { StatusBar } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import { AccountsList, DetailsAccount } from "../../screens"
import { Metrics, Palette } from "../../../res"
import { RootStackParamList } from "./types"

const Stack = createNativeStackNavigator<RootStackParamList>()

export function RootStack() {
   return (
      <>
         <StatusBar translucent backgroundColor={Palette.primary.default} barStyle="light-content" />
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                  headerShadowVisible: false,
                  headerStyle: { backgroundColor: Palette.primary.default },
                  headerTintColor: Palette.secondary.default,
                  headerTitleStyle: {
                     fontSize: Metrics.font_size.small,
                     fontWeight: '700',
                  },
               }}
            >
               <Stack.Screen name="Home" component={AccountsList} options={{ title: 'Plano de Contas' }} />
               <Stack.Screen name="Details" component={DetailsAccount} />
            </Stack.Navigator>
         </NavigationContainer>
         <SafeAreaView />
      </>
   )
}
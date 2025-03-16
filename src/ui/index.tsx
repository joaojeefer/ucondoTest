import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AccountsList, DetailsAccount } from "./screens";
import { RootStackParamList } from "./types";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Metrics, Palette } from "../res";

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Main() {
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
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
               <Stack.Screen name="Details" component={DetailsAccount} options={{ title: 'Inserir Conta' }} />
            </Stack.Navigator>
         </NavigationContainer>
      </SafeAreaView>
   )
}
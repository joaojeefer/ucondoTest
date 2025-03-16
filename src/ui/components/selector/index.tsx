import React from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import { SelectorProps } from "./types";

export function Selector<T>(props: SelectorProps<T>) {
   const { children, label, style, ...rest } = props

   return (
      <>
         <Text style={styles.label}>{label}</Text>
         <View style={[style, styles.pickerWrapper]}>
            <Picker {...rest} style={styles.picker}>
               {children}
            </Picker>
         </View>
      </>
   )
}
import React from "react"
import { Text, View } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { styles } from "./styles"
import { SelectorProps } from "./types"

export function Selector<T>(props: SelectorProps<T>) {
   const { children, enabled, label, style, ...rest } = props

   const disabledStyle = !enabled ? styles.disabledText : null

   return (
      <>
         <Text style={styles.label}>{label}</Text>
         <View style={[style, styles.pickerWrapper]}>
            <Picker
               {...rest}
               enabled={enabled}
               style={[styles.picker, disabledStyle]}
            >
               {children}
            </Picker>
         </View>
      </>
   )
}
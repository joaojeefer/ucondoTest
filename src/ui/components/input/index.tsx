import React from "react"
import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"
import { InputProps } from "./types"

export function Input(props: InputProps) {
   const { editable, label, style, ...rest } = props

   const disabledStyle = !editable ? styles.disabledText : null

   return (
      <>
         <Text style={styles.label}>{label}</Text>
         <View style={styles.container}>
            <TextInput
               {...rest}
               editable={editable}
               style={[style, styles.input, disabledStyle]}
            />
         </View>
      </>
   )
}
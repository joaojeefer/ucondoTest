import React from "react";
import { Text, TextInput, View } from "react-native";
import { InputProps } from "./types";
import { styles } from "./styles";

export function Input(props: InputProps) {
   const { label, style, ...rest } = props

   return (
      <>
         <Text style={styles.label}>{label}</Text>
         <View style={styles.container}>
            <TextInput {...rest} style={[style, styles.input]} />
         </View>
      </>
   )
}
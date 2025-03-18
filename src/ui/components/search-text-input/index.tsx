import React from "react"
import { TextInput, TextInputProps, View } from "react-native"
import Icon from "@react-native-vector-icons/fontawesome6"
import { styles } from "./styles"
import { Metrics, Palette } from "../../../res"

export function SearchTextInput(props: TextInputProps) {
   const { style, ...rest } = props

   return (
      <View style={styles.container}>
         <Icon
            name="magnifying-glass"
            color={Palette.secondary.light}
            size={Metrics.font_size.small}
            iconStyle="solid"
         />
         <TextInput
            {...rest}
            placeholderTextColor={Palette.secondary.light}
            style={[style, styles.input]}
         />
      </View>
   )
}
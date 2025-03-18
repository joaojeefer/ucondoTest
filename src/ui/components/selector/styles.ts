import { StyleSheet } from "react-native"
import { Metrics, Palette } from "../../../res"

export const styles = StyleSheet.create({
   label: {
      marginBottom: Metrics.spacing.xxx_small,
      fontSize: Metrics.font_size.x_small,
      fontWeight: '500',
      color: Palette.secondary.dark,
   },
   pickerWrapper: {
      height: 43,
      width: '100%',
      paddingLeft: Metrics.spacing.xx_small,
      borderRadius: Metrics.radius.x_small,
      backgroundColor: Palette.secondary.default,
   },
   picker: {
      backgroundColor: 'transparent',
      marginTop: -6,
   },
   disabledText: {
      color: Palette.secondary.light,
   },
})
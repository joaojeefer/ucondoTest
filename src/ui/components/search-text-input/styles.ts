import { StyleSheet } from "react-native"
import { Metrics, Palette } from "../../../res"

export const styles = StyleSheet.create({
   container: {
      height: 56,
      width: '100%',
      paddingHorizontal: Metrics.spacing.small,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: Metrics.radius.x_large,
      backgroundColor: Palette.secondary.default,
   },
   input: {
      flex: 1,
      marginLeft: Metrics.spacing.small,
   },
})
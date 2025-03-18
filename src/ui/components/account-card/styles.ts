import { StyleSheet } from "react-native"
import { Metrics, Palette } from "../../../res"

export const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      minHeight: 56,
      width: '100%',
      padding: Metrics.spacing.small,
      borderTopLeftRadius: Metrics.radius.small,
      borderTopRightRadius: Metrics.radius.small,
      borderBottomLeftRadius: Metrics.radius.small,
      borderBottomRightRadius: Metrics.radius.small,
      backgroundColor: Palette.secondary.default,
   },
   label: {
      flex: 1,
      fontSize: Metrics.font_size.x_small,
      fontWeight: '400',
   },
})

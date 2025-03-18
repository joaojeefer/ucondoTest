import { StyleSheet } from "react-native"
import { Metrics, Palette } from "../../../res"

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Palette.primary.default,
   },
   input: {
      marginHorizontal: Metrics.spacing.small,
      marginBottom: Metrics.spacing.small,
   },
   content: {
      flex: 1,
      paddingTop: Metrics.spacing.small,
      paddingHorizontal: Metrics.spacing.medium,
      backgroundColor: Palette.primary.light,
      borderTopLeftRadius: Metrics.radius.medium,
      borderTopRightRadius: Metrics.radius.medium,
   },
   listHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
   listHeaderTitle: {
      fontSize: Metrics.font_size.small,
      fontWeight: '400',
      color: Palette.secondary.dark,
   },
   listHeaderHelper: {
      fontSize: Metrics.font_size.x_small,
      fontWeight: '400',
      color: Palette.secondary.lightAlt,
   },
   list: {
      paddingBottom: Metrics.spacing.small,
      gap: Metrics.spacing.x_small,
   },
})
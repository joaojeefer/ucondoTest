import { StyleSheet } from "react-native";
import { Metrics, Palette } from "../../../res";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Palette.primary.default,
   },
   content: {
      flex: 1,
      paddingVertical: Metrics.spacing.small,
      paddingHorizontal: Metrics.spacing.medium,
      backgroundColor: Palette.primary.light,
      borderTopLeftRadius: Metrics.radius.medium,
      borderTopRightRadius: Metrics.radius.medium,
   },
   bottomSpacing: {
      marginBottom: Metrics.spacing.x_small,
   },
   error: {
      marginTop: Metrics.spacing.xxx_small,
      color: Palette.error.default,
   },
})

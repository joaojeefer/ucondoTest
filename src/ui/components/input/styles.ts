import { StyleSheet } from "react-native";
import { Metrics, Palette } from "../../../res";

export const styles = StyleSheet.create({
   label: {
      marginBottom: Metrics.spacing.xxx_small,
      fontSize: Metrics.font_size.x_small,
      fontWeight: '500',
      color: Palette.secondary.dark,
   },
   container: {
      height: 43,
      width: '100%',
      paddingHorizontal: Metrics.spacing.small,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: Metrics.radius.x_small,
      backgroundColor: Palette.secondary.default,
   },
   input: {
      flex: 1,
   },
   disabledText: {
      color: Palette.secondary.light,
   },
})
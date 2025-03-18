import { StyleSheet } from "react-native"
import { Metrics, Palette } from "../../../res"

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
   },
   content: {
      alignItems: 'center',
      padding: Metrics.spacing.large,
      borderRadius: Metrics.radius.small,
      backgroundColor: Palette.secondary.default,
   },
   icon: {
      marginBottom: Metrics.spacing.x_small,
   },
   description: {
      fontSize: Metrics.font_size.x_small,
      fontWeight: '400',
   },
   descriptionBold: {
      fontWeight: '700',
   },
   buttons: {
      marginTop: Metrics.spacing.medium,
      gap: Metrics.spacing.x_small,
      flexDirection: 'row',
      alignItems: 'center',
   },
   primaryButton: {
      paddingVertical: Metrics.spacing.xx_small,
      paddingHorizontal: Metrics.spacing.small,
      borderRadius: Metrics.radius.x_large,
      backgroundColor: Palette.error.default,
   },
   buttonLabel: {
      fontSize: Metrics.font_size.x_small,
      color: Palette.error.default,
   },
   primaryButtonLabel: {
      color: Palette.secondary.default,
   },
})

import { PickerProps } from "@react-native-picker/picker"

export type SelectorProps<T> = PickerProps<T> & {
   label: string
}
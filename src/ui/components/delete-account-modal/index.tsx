import React from "react"
import { Modal, Pressable, Text, View } from "react-native"
import { DeleteAccountModalProps } from "./types"
import { styles } from "./styles"
import Icon from "@react-native-vector-icons/fontawesome6"
import { Metrics, Palette } from "../../../res"

export function DeleteAccountModal(props: DeleteAccountModalProps) {
   const { accountLabel, isVisible, onRequestClose, onPrimaryButtonPress } = props

   function handlePrimaryButtonPress() {
      onPrimaryButtonPress()
      onRequestClose()
   }

   return (
      <Modal
         animationType="fade"
         transparent={true}
         visible={isVisible}
         onRequestClose={onRequestClose}
      >
         <View style={styles.container}>
            <View style={styles.content}>
               <Icon
                  name="trash"
                  color={Palette.error.default}
                  size={Metrics.font_size.xxx_large}
                  iconStyle="solid"
                  style={styles.icon}
               />
               <Text style={styles.description}>Deseja excluir a conta</Text>
               <Text style={[styles.description, styles.descriptionBold]}>{accountLabel}?</Text>
               <View style={styles.buttons}>
                  <Pressable onPress={onRequestClose}>
                     <Text style={styles.buttonLabel}>Não!</Text>
                  </Pressable>
                  <Pressable
                     style={styles.primaryButton}
                     onPress={handlePrimaryButtonPress}>
                     <Text style={[styles.buttonLabel, styles.primaryButtonLabel]}>Com certeza</Text>
                  </Pressable>
               </View>
            </View>
         </View>
      </Modal>
   )
}
import Icon from "@react-native-vector-icons/fontawesome6";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { AccountCardProps } from "./types";
import { Metrics, Palette } from "../../../res";
import { DeleteAccountModal } from "../delete-account-modal";

export function AccountCard(props: AccountCardProps) {
   const { label, onDeletePress } = props

   const [deleteAccountModalVisible, setDeleteAccountModalVisible] = useState(false)

   return (
      <>
         <View style={styles.container}>
            <Text style={styles.label} numberOfLines={2}>{label}</Text>
            <Icon
               name="trash"
               color={Palette.secondary.light}
               size={Metrics.font_size.x_small}
               iconStyle="solid"
               onPress={() => setDeleteAccountModalVisible(true)}
            />
         </View>
         <DeleteAccountModal
            isVisible={deleteAccountModalVisible}
            onRequestClose={() => setDeleteAccountModalVisible(false)}
            onPrimaryButtonPress={onDeletePress}
         />
      </>
   )
}
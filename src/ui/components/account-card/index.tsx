import Icon from "@react-native-vector-icons/fontawesome6"
import React, { useState } from "react"
import { Pressable, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { DeleteAccountModal } from "../delete-account-modal"
import { Metrics, Palette } from "../../../res"
import { styles } from "./styles"
import { AccountCardProps } from "./types"
import { UseNavigationProp } from "../../routes/types"

export function AccountCard(props: AccountCardProps) {
   const { account, onDeleteAccount } = props

   const [deleteAccountModalVisible, setDeleteAccountModalVisible] = useState(false)

   const navigation = useNavigation<UseNavigationProp>()

   const accountLabel = `${account.code} - ${account.name}`
   const labelStyle = account.type === 'Receita' ? styles.income : styles.expense

   function handleDetailsPress() {
      navigation.navigate('Details', { code: account.code })
   }

   return (
      <>
         <Pressable onPress={handleDetailsPress} style={styles.container}>
            <Text style={[styles.label, labelStyle]} numberOfLines={2}>{accountLabel}</Text>
            <Icon
               name="trash"
               color={Palette.secondary.light}
               size={Metrics.font_size.x_small}
               iconStyle="solid"
               onPress={() => setDeleteAccountModalVisible(true)}
            />
         </Pressable>
         <DeleteAccountModal
            accountLabel={accountLabel}
            isVisible={deleteAccountModalVisible}
            onRequestClose={() => setDeleteAccountModalVisible(false)}
            onPrimaryButtonPress={onDeleteAccount}
         />
      </>
   )
}
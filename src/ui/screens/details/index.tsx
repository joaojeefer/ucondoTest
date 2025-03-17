import React, { useContext, useEffect, useState } from "react"
import { View } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { AccountContext } from "../../../context"
import { Input, Selector } from "../../components"
import { styles } from "./styles"
import { DetailsProps } from "./types"

export function DetailsAccount(props: DetailsProps) {
   const { navigation, route } = props

   const [parentCode, setParentCode] = useState('')
   const [code, setCode] = useState('')
   const [name, setName] = useState('')
   const [accountType, setType] = useState('Receita')
   const [acceptEntries, setAcceptEntries] = useState(true)

   const { accounts } = useContext(AccountContext)

   useEffect(() => {
      navigation.setOptions({
         title: route.params?.code ? 'Editar Conta' : 'Inserir Conta',
      })
   }, [navigation])

   useEffect(() => {
      handleParentCode(route.params?.code ?? accounts[0].code)
      handleOtherValues(route.params?.code)
   }, [])

   function handleOtherValues(parent?: string) {
      const selectedAccount = accounts.find(account => account.code === parent)

      if (selectedAccount) {
         setName(selectedAccount.name)
         setType(selectedAccount.type)
         setAcceptEntries(selectedAccount.acceptEntries)
      }
   }

   function handleCode(parent: string) {
      const childrenAccounts = accounts.filter(account => account.code.startsWith(`${parent}.`))

      if (!childrenAccounts.length) {
         setCode(`${parent}.1`)
      } else {
         const lastCode = childrenAccounts.sort().pop()
         const lastValue = Number(lastCode?.code.split('.').pop())
         const newCode = `${parent}.${lastValue + 1}`
         setCode(newCode)
      }
   }

   function handleParentCode(parent: string) {
      setParentCode(parent)
      handleCode(parent)
   }

   return (
      <View style={styles.container}>
         <View style={styles.content}>
            <Selector
               label="Conta pai"
               selectedValue={parentCode}
               style={styles.bottomSpacing}
               onValueChange={handleParentCode}
            >
               {accounts.map(account =>
                  <Picker.Item
                     key={account.code}
                     value={account.code}
                     label={`${account.code} - ${account.name}`}
                  />
               )}
            </Selector>

            <View style={styles.bottomSpacing}>
               <Input label="Código" value={code} onChangeText={setCode} editable={false} />
            </View>

            <View style={styles.bottomSpacing}>
               <Input label="Nome" value={name} onChangeText={setName} />
            </View>

            <Selector
               label="Tipo"
               selectedValue={accountType}
               style={styles.bottomSpacing}
               onValueChange={setType}
            >
               <Picker.Item label="Receita" value="Receita" />
               <Picker.Item label="Despesa" value="Despesa" />
            </Selector>

            <Selector
               label="Aceita lançamentos"
               selectedValue={acceptEntries}
               style={styles.bottomSpacing}
               onValueChange={setAcceptEntries}
            >
               <Picker.Item label="Sim" value={true} />
               <Picker.Item label="Não" value={false} />
            </Selector>
         </View>
      </View>
   )
}
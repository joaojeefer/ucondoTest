import React, { useContext, useState } from "react"
import { Text, TextInput, View } from "react-native"
import { AccountContext } from "../../../context"
import { Picker } from "@react-native-picker/picker"
import { Input, Selector } from "../../components"
import { styles } from "./styles"

export function DetailsAccount() {
   const [parentCode, setParentCode] = useState('')
   const [code, setCode] = useState('')
   const [name, setName] = useState('')
   const [accountType, setType] = useState('Receita')
   const [acceptEntries, setAcceptEntries] = useState(false)

   const { accounts } = useContext(AccountContext)

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
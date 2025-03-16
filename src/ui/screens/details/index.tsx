import React, { useContext, useState } from "react"
import { TextInput, View } from "react-native"
import { AccountContext } from "../../../context"
import { Picker } from "@react-native-picker/picker"

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
      <View style={{ flex: 1 }}>
         <Picker selectedValue={parentCode} onValueChange={handleParentCode}>
            {accounts.map(account =>
               <Picker.Item key={account.code} value={account.code} label={`${account.code} - ${account.name}`} />
            )}
         </Picker>
         <TextInput value={code} onChangeText={setCode} editable={false} />
         <TextInput value={name} onChangeText={setName} />
         <Picker selectedValue={accountType} onValueChange={setType}>
            <Picker.Item label="Receita" value="Receita" />
            <Picker.Item label="Despesa" value="Despesa" />
         </Picker>
         <Picker selectedValue={acceptEntries} onValueChange={setAcceptEntries}>
            <Picker.Item label="Sim" value={true} />
            <Picker.Item label="Não" value={false} />
         </Picker>
      </View>
   )
}
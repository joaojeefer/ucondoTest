import React, { useContext, useEffect, useRef, useState } from "react"
import { Alert, Text, View } from "react-native"
import Icon from "@react-native-vector-icons/fontawesome6"
import { Picker } from "@react-native-picker/picker"
import { Formik, FormikErrors, FormikProps, FormikValues } from "formik"
import * as yup from 'yup'
import { AccountContext } from "../../../context"
import { Input, Selector } from "../../components"
import { Metrics, Palette } from "../../../res"
import { styles } from "./styles"
import { DetailsFormValues, DetailsProps } from "./types"

const validationSchema = yup.object().shape({
   parentCode: yup.string().required('Campo obrigatório!'),
   code: yup.string().required('Campo obrigatório!'),
   name: yup.string().required('Campo obrigatório!'),
   accountType: yup.string().required('Campo obrigatório!'),
   acceptEntries: yup.boolean().required('Campo obrigatório!'),
})

export function DetailsAccount(props: DetailsProps) {
   const { navigation, route } = props

   const [parentCode, setParentCode] = useState('0')
   const [code, setCode] = useState('')
   const [name, setName] = useState('')
   const [accountType, setType] = useState('Receita')
   const [acceptEntries, setAcceptEntries] = useState(true)

   const initialValues = {
      parentCode,
      code,
      name,
      accountType,
      acceptEntries,
   } satisfies DetailsFormValues

   const formRef = useRef<FormikProps<DetailsFormValues>>(null)

   const { accounts, addAccount } = useContext(AccountContext)

   useEffect(() => {
      navigation.setOptions({
         title: route.params?.code ? 'Detalhes da Conta' : 'Inserir Conta',
         headerRight: () => !route.params?.code ? (
            <Icon
               name="check"
               color={Palette.secondary.default}
               size={Metrics.font_size.x_small}
               iconStyle="solid"
               onPress={() => formRef.current?.handleSubmit()}
            />
         ) : null,
      })
   }, [navigation])

   useEffect(() => {
      if (route.params?.code) {
         handleSelectedAccount(route.params?.code)
      } else {
         handleParentCode(accounts[0].code)
      }
   }, [])

   function handleSelectedAccount(parent?: string) {
      const selectedAccount = accounts.find(account => account.code === parent)
      const breakedParent = selectedAccount?.code.split('.')

      if (!!breakedParent?.length && breakedParent?.length > 1) {
         breakedParent.pop()
         setParentCode(breakedParent.join('.'))
      }

      if (selectedAccount) {
         setCode(selectedAccount.code)
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

   function handleSubmitForm(values: FormikValues) {
      addAccount({
         code: values.code,
         name: values.name,
         type: values.accountType,
         acceptEntries: values.acceptEntries,
      })

      Alert.alert("Tudo certo!", "Novo registro adicionado com sucesso.")

      navigation.push('Home')
   }

   return (
      <View style={styles.container}>
         <Formik
            innerRef={formRef}
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmitForm}
            style={styles.content}
         >
            {({ values, errors, handleChange }) => {
               return (
                  <View style={styles.content}>
                     <Selector
                        enabled={!route.params?.code}
                        label="Conta pai"
                        selectedValue={values.parentCode}
                        style={styles.bottomSpacing}
                        onValueChange={value => {
                           handleParentCode(value)
                           handleChange('parentCode')
                        }}
                     >
                        <Picker.Item value="0" label="Selecione" />
                        {accounts.map(account =>
                           <Picker.Item
                              color={Palette.secondary.dark}
                              key={account.code}
                              value={account.code}
                              label={`${account.code} - ${account.name}`}
                           />
                        )}
                     </Selector>

                     <View style={styles.bottomSpacing}>
                        <Input
                           editable={false}
                           label="Código"
                           value={values.code}
                           onChangeText={value => {
                              setCode(value)
                              handleChange('code')
                           }}
                        />
                     </View>

                     <View style={styles.bottomSpacing}>
                        <Input
                           editable={!route.params?.code}
                           label="Nome"
                           value={values.name}
                           onChangeText={value => {
                              setName(value)
                              handleChange('name')
                           }}
                        />
                        {errors.name && (<Text style={styles.error}>{errors?.name}</Text>)}
                     </View>

                     <Selector
                        enabled={!route.params?.code}
                        label="Tipo"
                        selectedValue={values.accountType}
                        style={styles.bottomSpacing}
                        onValueChange={value => {
                           setType(value)
                           handleChange('accountType')
                        }}
                     >
                        <Picker.Item label="Receita" value="Receita" color={Palette.secondary.dark} />
                        <Picker.Item label="Despesa" value="Despesa" color={Palette.secondary.dark} />
                     </Selector>

                     <Selector
                        enabled={!route.params?.code}
                        label="Aceita lançamentos"
                        selectedValue={values.acceptEntries}
                        style={styles.bottomSpacing}
                        onValueChange={value => {
                           setAcceptEntries(value)
                           handleChange(acceptEntries)
                        }}
                     >
                        <Picker.Item label="Sim" value={true} color={Palette.secondary.dark} />
                        <Picker.Item label="Não" value={false} color={Palette.secondary.dark} />
                     </Selector>
                  </View>
               )
            }}
         </Formik>
      </View>
   )
}
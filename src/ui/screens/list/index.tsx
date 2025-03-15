import React, { useContext, useState } from "react"
import { Button, FlatList, Text, TextInput, View } from "react-native"
import { AccountContext } from "../../../context"

export function AccountsList() {
    const [search, setSearch] = useState('')

    const { accounts, deleteAccount } = useContext(AccountContext)

    return (
        <View>
            <TextInput placeholder="Pesquisar conta" value={search} onChangeText={setSearch} />

            <View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text>Listagem</Text>
                    <Text>{accounts.length} registros</Text>
                </View>

                <FlatList
                    data={accounts}
                    keyExtractor={item => item.code}
                    renderItem={({ item }) => (
                        <View key={item.code} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text>{`${item.code} - ${item.name}`}</Text>
                            <Button title="Del" onPress={() => deleteAccount(item.code)} />
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

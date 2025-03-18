import React, { useContext, useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import Icon from '@react-native-vector-icons/fontawesome6'
import { AccountContext } from "../../../context"
import { AccountCard, SearchTextInput } from "../../components"
import { Metrics, Palette } from "../../../res"
import { styles } from "./styles"
import { AccountsListProps } from "./types"

export function AccountsList(props: AccountsListProps) {
    const { navigation } = props

    const { accounts, deleteAccount } = useContext(AccountContext)

    const [filteredAccounts, setFilteredAccounts] = useState(accounts)
    const [search, setSearch] = useState('')

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Icon
                    name="plus"
                    color={Palette.secondary.default}
                    size={Metrics.font_size.x_small}
                    iconStyle="solid"
                    onPress={() => navigation.navigate('Details')}
                />
            ),
        })
    }, [navigation])

    const filterAccounts = (query: string) => {
        if (!query) {
            setFilteredAccounts(accounts)
            return null
        }

        const freshList = filteredAccounts.filter(account => account.code.startsWith(query.trim()))
        setFilteredAccounts(freshList)
    }

    function ListHeader() {
        return (
            <View style={styles.listHeader}>
                <Text style={styles.listHeaderTitle}>Listagem</Text>
                <Text style={styles.listHeaderHelper}>{filteredAccounts.length} registros</Text>
            </View>
        )
    }

    function EmptyList() {
        return (
            <View style={styles.emptyList}>
                <Text>Nenhum registro disponível</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <SearchTextInput
                    placeholder="Pesquisar conta"
                    value={search}
                    onChangeText={value => {
                        setSearch(value)
                        filterAccounts(value)
                    }}
                    returnKeyType="done"
                />
            </View>

            <View style={styles.content}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.list}
                    ListHeaderComponent={ListHeader}
                    data={filteredAccounts}
                    extraData={filteredAccounts}
                    keyExtractor={item => item.code}
                    ListEmptyComponent={() => <EmptyList />}
                    renderItem={({ item }) =>
                        <AccountCard
                            account={`${item.code} - ${item.name}`}
                            label={`${item.code} - ${item.name}`}
                            onDetailsPress={() => navigation.navigate('Details', { code: item.code })}
                            onDeletePress={() => deleteAccount(item.code)}
                        />
                    }
                />
            </View>
        </View>
    )
}

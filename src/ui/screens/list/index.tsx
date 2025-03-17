import React, { useContext, useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import Icon from '@react-native-vector-icons/fontawesome6';
import { AccountContext } from "../../../context"
import { AccountCard, SearchTextInput } from "../../components";
import { Metrics, Palette } from "../../../res";
import { styles } from "./styles";
import { AccountsListProps } from "./types";

export function AccountsList(props: AccountsListProps) {
    const { navigation } = props

    const [search, setSearch] = useState('')

    const { accounts, deleteAccount } = useContext(AccountContext)

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

    function ListHeader() {
        return (
            <View style={styles.listHeader}>
                <Text style={styles.listHeaderTitle}>Listagem</Text>
                <Text style={styles.listHeaderHelper}>{accounts.length} registros</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <SearchTextInput placeholder="Pesquisar conta" value={search} onChangeText={setSearch} />
            </View>

            <View style={styles.content}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.list}
                    ListHeaderComponent={ListHeader}
                    data={accounts}
                    extraData={accounts}
                    keyExtractor={item => item.code}
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

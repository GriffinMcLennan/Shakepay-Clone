import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Transaction from './Transaction'

const Transactions = ({ transactionsData, currency }) => {
    const n = transactionsData.length;

    return (
        <View>
            <Text style={styles.header}>Transactions</Text>
            {
                transactionsData.map((tuple, ind) => (
                    <Transaction key={n - ind} {...tuple} currency={currency} />
                ))
            }
        </View>
    )
}

export default Transactions

const styles = StyleSheet.create({
    header: {
        fontSize: 22,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
    },
});

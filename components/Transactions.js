import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Transaction from './Transaction'

const data = [{ type: "Buy", date: "Apr 12", amount: "0.5123" },
{ type: "Send", address: "eth:0x0cFD9aFDXCG31", date: "Apr 11", amount: "0.031" },
{ type: "Receive", date: "Apr 15", amount: "3.4", address: "eth:0x93291fdfdsa31" },
];

const Transactions = ({ currency }) => {
    return (
        <View>
            <Text style={styles.header}>Transactions</Text>
            {
                data.map((tuple) => (
                    <Transaction key={`${tuple.type}${tuple.date}${tuple.amount}${tuple.address}`} {...tuple} currency={currency} />
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

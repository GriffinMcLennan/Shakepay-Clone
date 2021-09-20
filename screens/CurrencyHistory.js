import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CurrencyHistory = ({ navigation }) => {
    return (
        <View>
            <Text>Currency History</Text>
            <Button title="Purchase" onPress={() => navigation.navigate("Buy & sell")} />
        </View>
    )
}

export default CurrencyHistory

const styles = StyleSheet.create({})

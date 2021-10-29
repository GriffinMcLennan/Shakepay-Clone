import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../constants/theme'

const ConversionInfo = ({ from, to, bitcoinPrice, ethereumPrice }) => {
    const buySell = to === "Bitcoin" || to === "Ethereum" ? "Buy" : "Sell";
    const crypto = from === "Bitcoin" || to === "Bitcoin" ? "Bitcoin" : "Ethereum";
    const price = crypto === "Bitcoin" ? bitcoinPrice : ethereumPrice;
    const tag = crypto === "Bitcoin" ? "BTC" : "ETH";
    return (
        <View style={styles.container}>
            <Text>{buySell} price</Text>
            {price && <Text>1 {tag} = {price.toLocaleString('en-US', { currency: 'USD' })} CAD</Text>}
        </View>
    )
}

export default ConversionInfo

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 5,
        paddingRight: 5,
        borderRightWidth: 1,
        borderColor: COLORS.mildGray,

    }
})

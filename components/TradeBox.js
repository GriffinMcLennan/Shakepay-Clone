import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const GRAY = "#455d87";

const TradeBox = ({ color, SVG, toFrom, amountArr }) => {
    const amount = Number(amountArr.join("")).toLocaleString('en-US', { currency: 'USD' });

    return (
        <View style={[styles.container, { borderColor: color }]}>
            {/* <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: "100%" }}> */}
            <Pressable style={styles.currencyInfo}>
                <SVG width={35} height={35} />

                <View style={styles.currencyInfoText}>
                    <Text style={{ color: GRAY, marginBottom: 2, fontSize: 14, }}>{toFrom}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontWeight: "400", fontSize: 18, marginRight: 7, }}>$CURRENCY</Text>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </View>
                    <Text style={{ color: GRAY, fontSize: 14, }}>0.0123</Text>
                </View>
            </Pressable>

            <Text style={styles.amount}>{amount}</Text>
            {/* </View> */}
        </View>
    )
}

export default TradeBox

const styles = StyleSheet.create({
    container: {
        height: 130,
        borderLeftWidth: 5,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#f0f5ff",
        borderBottomColor: "#f0f5ff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    row: {
        flexDirection: "row",
        width: "100%",
    },
    currencyInfo: {
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
        marginLeft: 15,
    },
    currencyInfoText: {
        marginLeft: 5,
    },
    amount: {
        fontSize: 26,
        fontWeight: "300",
        marginRight: 25,
    }
})

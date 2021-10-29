import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useModalContext } from './../contexts/ModalProvider'
import { formatNumber } from '../services/formatNumber';
import { truncate } from './../services/truncate'
import COLORS from '../constants/theme'

const TradeBox = ({ currency, color, SVG, toFrom, amountArr, value, available }) => {
    const amount = value !== undefined ? value : formatNumber(amountArr.join(""));
    const { toggleFromModalVisible, toggleToModalVisible } = useModalContext();
    const modalToggle = toFrom === "From" ? toggleFromModalVisible : toggleToModalVisible;

    return (
        <View
            style={[
                styles.container,
                { borderColor: color }
            ]}>

            <Pressable
                style={styles.currencyInfo}
                onPress={() => modalToggle()}
            >
                <SVG
                    width={35}
                    height={35}
                />

                <View style={styles.currencyInfoText}>
                    <Text style={styles.toFrom}>{toFrom}</Text>
                    <View style={styles.currencyBox}>
                        <Text style={styles.currencyText}>{currency}</Text>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </View>
                    <Text style={styles.currencyAvailable}>{truncate(available)}</Text>
                </View>
            </Pressable>

            <Text style={styles.amount}>{amount}</Text>
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
        borderTopColor: COLORS.mildGray,
        borderBottomColor: COLORS.mildGray,
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
    },
    toFrom: {
        color: COLORS.lightGray,
        marginBottom: 2,
        fontSize: 14,
    },
    currencyBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    currencyText: {
        fontWeight: "400",
        fontSize: 18,
        marginRight: 7
    },
    currencyAvailable: {
        color: COLORS.lightGray,
        fontSize: 14,
    }
})

import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Pressable } from 'react-native'
import { Dimensions } from 'react-native'
import BitcoinLogo from './../assets/btc.svg'
import EthereumLogo from './../assets/eth.svg'
import DollarLogo from './../assets/mapleLeaf.svg'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useModalContext } from '../contexts/ModalProvider'
import { useUserContext } from './../contexts/UserProvider'
import GradientButton from './GradientButton'
import { handleTransaction } from './../services/handleTransaction'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const currencyToLogo = {
    Dollars: DollarLogo,
    Bitcoin: BitcoinLogo,
    Ethereum: EthereumLogo,
};

const TransactionModal = () => {
    const {
        fromCurrency,
        fromCurrencyAmount,
        toCurrency,
        toCurrencyAmount,
        toggleTransactionModalVisible,
        toggleTradeCompleteModalVisible,
    } = useModalContext();

    const { uid } = useUserContext();
    const FromLogo = currencyToLogo[fromCurrency];
    const ToLogo = currencyToLogo[toCurrency];

    const submitTransaction = () => {
        handleTransaction(fromCurrency, toCurrency, fromCurrencyAmount, uid, toCurrencyAmount);
        toggleTransactionModalVisible();
        toggleTradeCompleteModalVisible();
    }

    return (
        <TouchableWithoutFeedback onPress={() => toggleTransactionModalVisible()}>
            <View style={styles.dominant}>
                <Pressable style={styles.modal}>
                    <View style={styles.row}>
                        <Text style={styles.confirmationText}>Confirm transaction</Text>
                        <Pressable
                            style={styles.exit}
                            onPress={() => toggleTransactionModalVisible()}
                        >
                            <FontAwesomeIcon icon={faTimes} size={18} />
                        </Pressable>
                    </View>

                    <View style={styles.currency}>
                        <View style={styles.currencyRow}>
                            <FromLogo height={40} width={40} />
                            <View style={styles.info}>
                                <Text style={styles.infoText}>From</Text>
                                <Text style={styles.infoAmount}>{fromCurrencyAmount}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.currency}>
                        <View style={styles.currencyRow}>
                            <ToLogo height={40} width={40} />
                            <View style={styles.info}>
                                <Text style={styles.infoText}>To</Text>
                                <Text style={styles.infoAmount}>{toCurrencyAmount}</Text>
                            </View>
                        </View>
                    </View>

                    <GradientButton text="Confirm" onPress={() => submitTransaction()} />
                </Pressable>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default TransactionModal

const styles = StyleSheet.create({
    dominant: {
        position: "absolute",
        top: -200,
        zIndex: 1000,
        width: windowWidth,
        height: windowHeight + 200,
        backgroundColor: 'rgba(19, 43, 80, 0.7)',
        alignItems: "center",
    },
    modal: {
        position: "absolute",
        width: "100%",
        backgroundColor: "white",
        bottom: 0,
        height: 450,
    },
    confirmationText: {
        fontSize: 20,
        fontWeight: "400",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    currency: {
        paddingLeft: 10,
        paddingTop: 30,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    currencyRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    info: {
        marginLeft: 15,
    },
    infoText: {
        fontSize: 16,
        color: "#657795",
    },
    infoAmount: {
        marginTop: 3,
        fontSize: 16,
    },
    exit: {
        height: 50,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
    }
})

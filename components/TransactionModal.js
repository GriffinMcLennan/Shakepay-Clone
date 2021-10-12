import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { Dimensions } from 'react-native'
import BitcoinLogo from './../assets/btc.svg'
import EthereumLogo from './../assets/eth.svg'
import DollarLogo from './../assets/mapleLeaf.svg'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useModalContext } from '../contexts/ModalProvider'
import GradientButton from './GradientButton'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TransactionModal = () => {
    // const { toggleTransactionModalVisible } = useModalContext();

    return (
        <TouchableWithoutFeedback >
            <View style={styles.dominant}>
                <View style={styles.modal}>
                    <View style={styles.row}>
                        <Text style={styles.confirmationText}>Confirm transaction</Text>
                        <TouchableWithoutFeedback>
                            <FontAwesomeIcon icon={faTimes} size={18} />
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.currency}>
                        <View style={styles.currencyRow}>
                            <BitcoinLogo height={40} width={40} />
                            <View style={styles.info}>
                                <Text style={styles.infoText}>From</Text>
                                <Text style={styles.infoAmount}>0.001321</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.currency}>
                        <View style={styles.currencyRow}>
                            <DollarLogo height={40} width={40} />
                            <View style={styles.info}>
                                <Text style={styles.infoText}>To</Text>
                                <Text style={styles.infoAmount}>0.001321</Text>
                            </View>
                        </View>
                    </View>

                    <GradientButton text="Confirm" />
                </View>
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
        padding: 20,
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
    }
})

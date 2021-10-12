import React from 'react'
import { StyleSheet, Text, View, Pressable, Modal, Image } from 'react-native'
import InteracLogo from './../assets/interac_logo.png'
import { useModalContext } from './../contexts/ModalProvider'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import BitcoinLogo from './../assets/btc.svg'
import EthereumLogo from './../assets/eth.svg'
import DollarLogo from './../assets/mapleLeaf.svg'

const currencyToLogo = {
    Dollars: DollarLogo,
    Bitcoin: BitcoinLogo,
    Ethereum: EthereumLogo,
}

const TradeCompleteModal = () => {
    const {
        toggleTradeCompleteModalVisible,
        toCurrency,
        toCurrencyAmount,
        fromCurrency,
    } = useModalContext();

    const Logo = currencyToLogo[toCurrency];
    const toName = toCurrency === 'Dollars' ? "CAD" : toCurrency;
    const prefix = toCurrency === 'Dollars' ? "$" : "";
    const buyOrSell = fromCurrency === 'Dollars' ? "bought" : "sold";

    return (
        <View style={styles.modalView}>
            <Modal
                animationType="slide"
            >
                <View style={styles.container}>
                    <Pressable
                        onPress={() => toggleTradeCompleteModalVisible()}
                        style={{ flexDirection: "row", height: 30, width: "100%", justifyContent: "flex-end", alignItems: "center", marginRight: 10, paddingTop: 20 }}
                    >
                        <View style={{ width: 50, height: 50, alignItems: "center", }}>
                            <FontAwesomeIcon icon={faTimes} size={22} />
                        </View>
                    </Pressable>

                    <Logo width={100} height={100} marginTop={170} />

                    <Text style={styles.currencyType}>Just {buyOrSell} {toName}</Text>
                    <Text style={styles.currencyAmount}>{prefix}{toCurrencyAmount}</Text>

                </View>
            </Modal>
        </View>
    )
}

export default TradeCompleteModal

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 55,
    },
    currencyType: {
        fontSize: 20,
        marginTop: 20,
    },
    currencyAmount: {
        fontSize: 20,
        fontWeight: "500",
        marginTop: 10,
    }
})

import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import TradeModalOption from './TradeModalOption'
import { Dimensions } from 'react-native'
import BitcoinLogo from './../assets/btc.svg'
import EthereumLogo from './../assets/eth.svg'
import InteracLogo from './../assets/interac_logo.jpg'
import WireTransferLogo from './../assets/wire.png'
import { useModalContext } from './../contexts/ModalProvider'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FundingModal = ({ toggleOverlay }) => {
    const { toggleFundingModalVisible, toggleInteracModalVisible, toggleBitcoinModalVisible } = useModalContext();

    return (
        <TouchableWithoutFeedback onPress={toggleFundingModalVisible} >
            <View style={styles.dominant}>
                <TouchableWithoutFeedback >
                    <View style={[styles.modal, styles.infoModal]}>
                        <Text style={styles.text}>Choose a funding option</Text>
                        <TradeModalOption title="Interac e-Transfer" ImageSrc={InteracLogo} toggleModal={toggleFundingModalVisible} toggleLinkModal={toggleInteracModalVisible} />
                        <TradeModalOption title="Bitcoin" SVG={BitcoinLogo} toggleModal={toggleFundingModalVisible} toggleLinkModal={toggleBitcoinModalVisible} />
                        <TradeModalOption title="Ethereum" SVG={EthereumLogo} toggleModal={toggleFundingModalVisible} />
                        <TradeModalOption title="Wire Transfer" ImageSrc={WireTransferLogo} last={true} toggleModal={toggleFundingModalVisible} />
                    </View>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={toggleFundingModalVisible}>
                    <View style={[styles.modal, styles.closeModal]}>
                        <Text>Cancel</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default FundingModal

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
        width: "90%",
        backgroundColor: "white",
        borderRadius: 5,
    },
    infoModal: {
        bottom: 165,
        height: 310,
    },
    closeModal: {
        bottom: 100,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#657795",
        paddingTop: 20,
        paddingLeft: 20,
        fontSize: 16,
    }
})

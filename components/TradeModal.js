import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import TradeModalOption from './TradeModalOption'
import { Dimensions } from 'react-native'
import { faExchangeAlt, faHistory, faTags } from '@fortawesome/free-solid-svg-icons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TradeModal = ({ toggleOverlay }) => {
    return (
        <TouchableWithoutFeedback onPress={toggleOverlay} >
            <View style={styles.dominant}>
                <TouchableWithoutFeedback >
                    <View style={[styles.modal, styles.infoModal]}>
                        <TradeModalOption title="Buy & sell" description="Buy and sell at current prices" Icon={faExchangeAlt} toggleOverlay={toggleOverlay} />
                        <TradeModalOption title="Recurring buys" description="Automatically buy every day, every week, or every month" Icon={faHistory} />
                        <TradeModalOption title="Limit orders" description="Place a buy or sell order at a price you set" Icon={faTags} last={true} />

                    </View>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={toggleOverlay}>
                    <View style={[styles.modal, styles.closeModal]}>
                        <Text>Cancel</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default TradeModal

const styles = StyleSheet.create({
    dominant: {
        position: "absolute",
        top: -200,
        zIndex: 1000,
        width: windowWidth,
        height: windowHeight + 200,
        //other potential colour scheme
        // backgroundColor: 'rgba(22, 43, 74, 0.8)', 
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
        height: 255,
    },
    closeModal: {
        bottom: 100,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
})

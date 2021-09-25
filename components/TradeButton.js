import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { useModalContext } from './../contexts/ModalProvider'

const TradeButton = () => {
    const { toggleTradeModalVisible } = useModalContext();

    return (
        <TouchableWithoutFeedback onPress={() => toggleTradeModalVisible()} >
            <View style={styles.container}>
                <FontAwesomeIcon icon={faExchangeAlt} size={20} color={"white"} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default TradeButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#009FFF",
        borderRadius: 50,
        position: "relative",
        bottom: 10,
        width: 55,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
    },
})

import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

const TradeButton = ({ toggleOverlay }) => {
    return (
        <TouchableWithoutFeedback onPress={toggleOverlay} >
            <View style={styles.container}>
                <FontAwesomeIcon icon={faExchangeAlt} size={20} color={"white"} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default TradeButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightskyblue",
        borderRadius: 50,
        position: "relative",
        bottom: 10,
        width: 55,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
    },
})

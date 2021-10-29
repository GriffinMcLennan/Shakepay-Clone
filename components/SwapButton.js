import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import COLORS from '../constants/theme'

const SwapButton = ({ swap }) => {
    return (
        <Pressable
            style={styles.container}
            onPress={() => swap()}
        >
            <FontAwesomeIcon
                color="#42b5fd"
                icon={faExchangeAlt}
                size={13}
                style={{ transform: [{ rotate: '90deg' }] }}
            />
        </Pressable>
    )
}

export default SwapButton

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: "100%",
        borderRightWidth: 1,
        borderColor: COLORS.mildGray,
    },
})

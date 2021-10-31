import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../constants/theme'

const CardInfo = ({ number, description, color }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.numberStyle, { color: color }]}>{number}</Text>
            <Text style={styles.descriptionStyle}>{description}</Text>
        </View >
    )
}

export default CardInfo

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center'
    },
    numberStyle: {
        fontSize: 40,
        fontWeight: "900",
        marginBottom: 15,
    },
    descriptionStyle: {
        color: COLORS.lightGray,
        fontSize: 16,
    }
})

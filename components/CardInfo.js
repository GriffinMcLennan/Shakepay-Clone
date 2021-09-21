import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
    },
    numberStyle: {
        fontSize: 40,
        fontWeight: "900",
        marginBottom: 15,
    },
    descriptionStyle: {
        color: "#6A6A6A",
        fontSize: 16,
    }
})

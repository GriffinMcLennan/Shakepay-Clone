import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CardScreen = () => {
    return (
        <View style={styles.container} >
            <Text>Shakepay card</Text>
        </View>
    )
}

export default CardScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    }
})
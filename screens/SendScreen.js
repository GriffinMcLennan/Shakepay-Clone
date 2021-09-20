import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SendScreen = () => {
    return (
        <View style={styles.container} >
            <Text>Shakepay a friend</Text>
        </View>
    )
}

export default SendScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    }
})
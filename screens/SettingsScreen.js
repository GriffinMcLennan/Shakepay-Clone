import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SettingsScreen = () => {
    return (
        <View style={styles.container} >
            <Text>Settings</Text>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    }
})

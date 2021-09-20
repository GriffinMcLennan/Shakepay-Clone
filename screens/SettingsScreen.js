import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Text>Settings</Text>
            <Button title="Help" onPress={() => navigation.navigate("Help")} />
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

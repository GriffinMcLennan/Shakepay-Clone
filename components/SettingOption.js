import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

const SettingOption = ({ title, onPress }) => {
    return (
        <Pressable
            style={styles.container}
            onPress={() => onPress && onPress()}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default SettingOption

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        height: 60,
        borderTopWidth: 1,
        borderTopColor: "#f0f5ff",
        borderBottomColor: "#f0f5ff",
        borderBottomWidth: 1,
        alignItems: "center",
        paddingLeft: 15,
    },
    text: {
        fontSize: 16,
        fontWeight: "400",
    }
})

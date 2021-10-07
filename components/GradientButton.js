import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const GradientButton = ({ onPress, text, disableButton = false, ...rest }) => {
    return (
        <Pressable
            style={[styles.container, { ...rest }]}
            onPress={() => {
                onPress();
            }}
        >
            <LinearGradient
                colors={['#009fff', '#00c8ff']}
                style={[styles.box, disableButton && { opacity: 0.3 }]}
                start={[0.5, 1]}
                end={[1, 1]}
            >
                <Text style={styles.text}>{text}</Text>
            </LinearGradient>
        </Pressable>
    )
}

export default GradientButton

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
    },
    box: {
        height: 50,
        width: "90%",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        backgroundColor: 'transparent',
    },
})

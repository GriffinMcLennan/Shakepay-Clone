import React from 'react'
import { StyleSheet, TextInput, View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import Contact from './../components/Contact'

const FRIENDS = ["Alice", "Bob", "Craig", "Dan", "Eli", "Francis", "Henry", "Janis", "Kyle", "Lyle", "Morris"];

const SendScreen = () => {
    return (
        <KeyboardAvoidingView style={styles.container} >
            <View style={styles.center}>
                <Text style={styles.text}>Shakepay a friend</Text>

                <View style={styles.box}>
                    <View style={styles.boxRow}>
                        <TextInput style={styles.boxText}>Send to @shaketag</TextInput>
                    </View>
                </View>

                <Text style={styles.contacts}>PHONE CONTACTS</Text>

            </View>

            <ScrollView>
                {
                    FRIENDS.map((name, index) => (
                        <Contact name={name} key={index} />
                    ))
                }
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SendScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        // alignItems: "center",
        flex: 1,
        width: "100%",
    },
    center: {
        width: "100%",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "400",
        marginTop: 15,
    },
    box: {
        backgroundColor: "#f0f7ff",
        height: 50,
        borderRadius: 5,
        padding: 5,
        marginTop: 20,
        justifyContent: "center",
        width: "90%",
        marginBottom: 10,
    },
    boxRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    boxText: {
        color: "#6581b3",
        fontWeight: "400",
        marginLeft: 5,
        fontSize: 16,
    },
    contacts: {
        fontSize: 12,
        justifyContent: 'flex-start',
        width: "100%",
        marginTop: 15,
        marginLeft: 45,
        marginBottom: 6,
        color: "#6581b3",
        fontWeight: "600",
    },
})
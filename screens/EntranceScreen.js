import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import ShakepayLogo from './../assets/ShakepayLogo.svg'
import GradientButton from './../components/GradientButton'
import COLORS from '../constants/theme'

const EntranceScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ShakepayLogo
                height={80}
                width={80}
                marginTop={150}
            />
            <Text style={styles.title}>Shakepay</Text>

            <Text style={styles.details}>
                The <Text style={styles.highlight}>easiest way</Text> for Canadians to buy and sell bitcoin.
            </Text>

            <Pressable
                style={styles.outlineButton}
                onPress={() => navigation.push("Sign In")}
            >
                <Text style={styles.outlineText}>Sign in</Text>
            </Pressable>

            <GradientButton
                text="Create an account"
                onPress={() => navigation.push("Register")}
            />
        </View>
    )
}

export default EntranceScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        marginTop: 40,
    },
    details: {
        marginTop: 35,
        fontSize: 22,
        fontWeight: "600",
        textAlign: "center",
        paddingLeft: 30,
        paddingRight: 30,
    },
    highlight: {
        color: COLORS.lightBlue,
        fontWeight: "bold",
    },
    outlineButton: {
        marginTop: 190,
        width: "90%",
        height: 50,
        borderRadius: 5,
        borderColor: COLORS.lightBlue,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    outlineText: {
        color: COLORS.lightBlue,
        fontWeight: "600",
        fontSize: 16,
    }
})

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import ShakeVisa from './../assets/ShakeVisa.jpg'
import CardInfo from './../components/CardInfo'

const CardScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>Shakepay Card</Text>
            <Text style={styles.subtitle}>Spend dollars, earn bitcoin</Text>
            <Image style={styles.card} source={ShakeVisa} resizeMode="contain" />
            <Text style={styles.greeting}>Hi $USER</Text>

            <View style={styles.info}>
                <CardInfo number="142,610" description="Waitlist position" />
                <CardInfo number="420" description="Points earned" color="#009FFF" />
            </View>
        </View>
    )
}

export default CardScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 34,
        marginTop: 30,
        color: "#009FFF",
        fontWeight: "700",
    },
    subtitle: {
        color: "#657795",
        fontSize: 16,
        marginTop: 10,
    },
    card: {
        marginTop: 50,
        height: "35%",
    },
    greeting: {
        fontSize: 24,
        fontWeight: "500",
        marginTop: 30,
    },
    info: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        width: "100%",
    }
})
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../constants/theme'

const ReferralInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.numberText}>3</Text>
                <Text style={styles.descriptionText}>Signups</Text>
            </View>

            <View style={styles.itemContainer}>
                <Text style={styles.numberText}>1</Text>
                <Text style={styles.descriptionText}>Accepted</Text>
            </View>

            <View style={styles.itemContainer}>
                <Text style={styles.numberText}>$30</Text>
                <Text style={styles.descriptionText}>Rewards</Text>
            </View>

        </View>
    )
}

export default ReferralInfo

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 25,
    },
    itemContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    numberText: {
        fontWeight: "500",
        fontSize: 20,
    },
    descriptionText: {
        color: COLORS.lightGray,
        marginTop: 15,
        marginBottom: 15,
    }
})

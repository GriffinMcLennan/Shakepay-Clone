import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../constants/theme'

const Contact = ({ name }) => {
    const INITIAL = name.charAt(0);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.circle}>
                    <Text style={styles.circleText}>{INITIAL}</Text>
                </View>

                <Text style={styles.nameText}>{name}</Text>
            </View>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 63,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.mildGray,
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    circle: {
        marginLeft: 10,
        height: 35,
        width: 35,
        borderRadius: 50,
        backgroundColor: COLORS.mildGray,
        justifyContent: "center",
        alignItems: "center",
    },
    circleText: {
        color: COLORS.lightBlue,
        fontSize: 18,
        fontWeight: "bold",
    },
    nameText: {
        fontSize: 16,
        fontWeight: "400",
        marginLeft: 15,
    }
})

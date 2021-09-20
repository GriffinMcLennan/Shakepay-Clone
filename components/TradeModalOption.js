import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const ICON_SIZE = 24;

const TradeModalOption = ({ title, description, Icon, last }) => {
    return (
        <Pressable onPress={() => alert("Travel to new screen")}>
            <View style={[styles.bottom, last && { borderBottomWidth: 0 }]} >
                <View style={styles.container}>
                    <FontAwesomeIcon icon={Icon} size={ICON_SIZE} color={"dodgerblue"} />
                    <View style={styles.info}>
                        <Text style={styles.titleFont}>{title}</Text>
                        <Text style={styles.descriptionFont}>{description}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default TradeModalOption

const styles = StyleSheet.create({
    bottom: {
        borderBottomWidth: 1,
        borderColor: "gainsboro",
    },
    container: {
        flexDirection: "row",
        padding: 10,
        marginRight: 30,
        marginTop: 10,
        alignItems: "center",
    },
    info: {
        display: "flex",
        marginLeft: 20,
    },
    titleFont: {
        fontSize: 16,
        fontWeight: "500",
    },
    descriptionFont: {
        fontSize: 14,
        marginTop: 7,
        color: "dimgray",
    }
})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Currency = ({ name, amount, Logo, price }) => {
    return (
        <View style={styles.holding}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Logo width={30} height={30} marginRight={10} />
                <View>
                    <Text style={styles.title}>{name}</Text>
                    {
                        price && (<Text style={styles.priceInfo}>${price}</Text>)
                    }
                </View>
            </View>
            <Text>{amount}</Text>
        </View >
    )
}

export default Currency

const styles = StyleSheet.create({
    holding: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
    },
    priceInfo: {
        fontSize: 12,
        color: "darkgray",
        marginLeft: 10,
    }
})

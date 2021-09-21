import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Currency = ({ name, amount, Logo, price }) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Currency History")} >
            <View style={styles.holding}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Logo width={36} height={36} marginRight={10} />
                    <View>
                        <Text style={styles.title}>{name}</Text>
                        {
                            price && (<Text style={styles.priceInfo}>${price}</Text>)
                        }
                    </View>
                </View>
                <Text>{amount}</Text>
            </View>
        </TouchableWithoutFeedback >
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
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
    },
    priceInfo: {
        fontSize: 12,
        color: "#657795",
        marginLeft: 10,
    }
})

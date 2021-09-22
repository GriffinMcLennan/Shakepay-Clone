import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const getPrice = (str) => {
    let num = 0;

    try {
        let n = str.length;

        for (let i = 0; i < n; i++) {
            if (str.charAt(i) == ',') continue;
            num = num * 10 + Number(str.charAt(i));
        }
    }
    catch (e) {
        return num;
    }

    return num;
}

const Currency = ({ name, amount, Logo, price }) => {
    const navigation = useNavigation();
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(getPrice(price) * amount);
    }, [price]);

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Currency History", {
            name: name,
        })} >
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

                <View style={{ alignItems: "flex-end" }}>
                    <Text style={styles.title}>{amount}</Text>
                    {
                        price && (<Text style={styles.priceInfo}>${value}</Text>)
                    }
                </View>
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
        fontSize: 20,
        fontWeight: "400",
    },
    priceInfo: {
        fontSize: 16,
        color: "#657795",
        marginTop: 5,
    }
})

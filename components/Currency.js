import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { truncate } from './../services/truncate'
import COLORS from '../constants/theme'

const Currency = ({ name, amount, Logo, price }) => {
    const navigation = useNavigation();
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (name === 'Dollars') {
            amount = amount.toLocaleString('en-US', { currency: 'USD' });
        }
    }, [amount]);

    useEffect(() => {
        setValue(Number(price) * amount);
    }, [price, amount]);

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Currency History", {
            name: name,
            currentPrice: price,
        })} >
            <View style={styles.holding}>
                <View
                    style={styles.row}
                >
                    <Logo
                        width={36}
                        height={36}
                        marginRight={10}
                    />
                    <View>
                        <Text style={styles.title}>{name}</Text>
                        {
                            price && (<Text style={styles.priceInfo}>${truncate(Number(price).toLocaleString('en-US', { currency: 'USD' }))}</Text>)
                        }
                    </View>
                </View>

                <View style={{
                    alignItems: "flex-end"
                }}>
                    <Text style={styles.title}>{truncate((name === 'Dollars' ? amount.toLocaleString('en-US', { currency: 'USD' }) : amount.toString()))}</Text>
                    {
                        price && (<Text style={styles.priceInfo}>${truncate(value.toLocaleString('en-US', { currency: 'USD' }))}</Text>)
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
        color: COLORS.lightGray,
        marginTop: 5,
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    }
})

import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import TradeBox from './../components/TradeBox'
import NumPad from './../components/NumPad'
import EthereumLogo from './../assets/eth.svg'
import BitcoinLogo from './../assets/btc.svg'
import CadLogo from './../assets/mapleLeaf.svg'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { LinearGradient } from 'expo-linear-gradient'


const RED = "#f1326b";
const ORANGE = "#f79218";

const BuyScreen = () => {
    const [number, setNumber] = useState(['0']);
    const [usedDecimal, setUsedDecimal] = useState(false);

    const disableButton = number.length === 1 && number[0] === '0';

    const numberPressed = (newDigit) => {
        const newNumber = [...number];

        if (newNumber.length === 9) {
            return;
        }

        if (newNumber.length === 1 && newNumber[0] === '0') {
            setNumber([newDigit]);
        }
        else {
            setNumber(newNumber => [...newNumber, newDigit]);
        }
    }

    const undoNumberPressed = () => {
        const newNumber = [...number];

        if (newNumber.length === 1) {
            if (newNumber[0] !== '0') {
                setNumber(['0']);
            }
        }
        else {
            const removedDigit = newNumber.pop();

            if (removedDigit === '.') {
                setUsedDecimal(false);
            }
            setNumber(newNumber);
        }
    }

    const decimalPressed = () => {
        if (number.length === 9) {
            return;
        }

        if (!usedDecimal) {
            setNumber(oldNumber => [...oldNumber, "."]);
            setUsedDecimal(true);
        }
    }

    return (
        <View style={styles.container}>
            <TradeBox color={ORANGE} SVG={BitcoinLogo} toFrom="From" amountArr={number} />
            <View style={styles.converter}>
                <Pressable style={styles.swap}>
                    <FontAwesomeIcon color="#42b5fd" icon={faExchangeAlt} size={13} style={{ transform: [{ rotate: '90deg' }] }} />
                </Pressable>

                <View style={styles.conversionRate}>
                    <Text>Sell price</Text>
                    <Text>1 BTC = 54,918.28 CAD</Text>
                </View>

                <Pressable style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <Text style={styles.maxText}>MAX</Text>
                </Pressable>
            </View>

            <TradeBox color={RED} SVG={CadLogo} toFrom="To" amountArr={number} />
            <NumPad numberPressed={numberPressed} undoNumberPressed={undoNumberPressed} decimalPressed={decimalPressed} />

            <Pressable
                style={{ width: "100%", alignItems: "center" }}
                onPress={() => {
                    console.log("Connect to API")
                }}
            >
                <LinearGradient
                    colors={['#009fff', '#00c8ff']}
                    style={[styles.refBox, disableButton && { opacity: 0.3 }]}
                    start={[0.5, 1]}
                    end={[1, 1]}
                >
                    <Text style={styles.refText}>Sell Bitcoin</Text>
                </LinearGradient>
            </Pressable>
        </View>
    )
}

export default BuyScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    converter: {
        height: 50,
        flexDirection: "row",
    },
    swap: {
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: "100%",
        borderRightWidth: 1,
        borderColor: "#f0f5ff",
    },
    conversionRate: {
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 5,
        paddingRight: 5,
        borderRightWidth: 1,
        borderColor: "#f0f5ff",
    },
    maxText: {
        fontSize: 22,
        color: "#42b5fd",
    },
    refText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        backgroundColor: 'transparent',
    },
    refBox: {
        height: 50,
        width: "90%",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
    },
})

import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import TradeBox from './../components/TradeBox'
import NumPad from './../components/NumPad'
import EthereumLogo from './../assets/eth.svg'
import BitcoinLogo from './../assets/btc.svg'
import CadLogo from './../assets/mapleLeaf.svg'
import { LinearGradient } from 'expo-linear-gradient'
import { basicPrices } from './../services/priceService'
import { useModalContext } from './../contexts/ModalProvider'
import SwapButton from './../components/SwapButton'
import ConversionInfo from '../components/ConversionInfo.js'

const RED = "#f1326b";
const ORANGE = "#f79218";
const BLACK = "black";

const BuyScreen = ({ route }) => {
    const { from } = route.params;
    const [number, setNumber] = useState(['0']);
    const [usedDecimal, setUsedDecimal] = useState(false);
    const [bitcoinPrice, setBitcoinPrice] = useState(null);
    const [ethereumPrice, setEthereumPrice] = useState(null);
    const [convertedValue, setConvertedValue] = useState(0);
    const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
    } = useModalContext();

    const availableCAD = 1000;
    const availableBTC = 2;
    const availableETH = 0;

    const currencyToInfo = {
        Dollars: {
            available: availableCAD,
            color: RED,
            logo: CadLogo,
            selectable: ["Bitcoin", "Ethereum"]
        },
        Bitcoin: {
            available: availableBTC,
            color: ORANGE,
            logo: BitcoinLogo,
            selectable: ["Dollars"],
            price: bitcoinPrice,
        },
        Ethereum: {
            available: availableETH,
            color: BLACK,
            logo: EthereumLogo,
            selectable: ["Dollars"],
            price: ethereumPrice,
        },
    };

    useEffect(() => {
        setFromCurrency(from);
        const fetchPrices = async () => {
            const { btcPrice, ethPrice } = await basicPrices();
            setBitcoinPrice(Number(btcPrice));
            setEthereumPrice(Number(ethPrice));
        }
        fetchPrices();
    }, []);

    useEffect(() => {
        if (bitcoinPrice !== null) {
            const nonConverted = Number(number.join(""));

            const converted = fromCurrency === "Dollars" ?
                (nonConverted / currencyToInfo[toCurrency].price)
                :
                nonConverted * currencyToInfo[fromCurrency].price;

            const formatted = Number(converted).toLocaleString('en-US', { currency: 'USD' });
            setConvertedValue(formatted);
        }
    }, [number]);

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

    const flipCurrencies = () => {
        const fromCopy = (' ' + fromCurrency).slice(1);
        const toCopy = (' ' + toCurrency).slice(1);

        setFromCurrency(toCopy);
        setToCurrency(fromCopy);

        setNumber(['0']);
        setUsedDecimal(false);
    }

    return (
        <View style={styles.container}>
            {fromCurrency !== undefined && toCurrency !== undefined &&
                <View>
                    <TradeBox
                        currency={fromCurrency}
                        color={currencyToInfo[fromCurrency].color}
                        SVG={currencyToInfo[fromCurrency].logo}
                        toFrom="From"
                        amountArr={number}
                        available={currencyToInfo[fromCurrency].available}
                    />

                    <View style={styles.swapOptionsRow}>
                        <SwapButton swap={() => flipCurrencies()} />
                        <ConversionInfo
                            from={fromCurrency}
                            to={toCurrency}
                            bitcoinPrice={bitcoinPrice}
                            ethereumPrice={ethereumPrice}
                        />
                        {/* <View style={styles.conversionRate}>
                            <Text>Sell price</Text>
                            {bitcoinPrice && <Text>1 BTC = {bitcoinPrice.toLocaleString('en-US', { currency: 'USD' })} CAD</Text>}
                        </View> */}

                        <Pressable style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                            <Text style={styles.maxText}>MAX</Text>
                        </Pressable>
                    </View>

                    <TradeBox
                        currency={toCurrency}
                        color={currencyToInfo[toCurrency].color}
                        SVG={currencyToInfo[toCurrency].logo}
                        toFrom="To"
                        value={convertedValue}
                        available={currencyToInfo[toCurrency].available}
                    />
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
            }
        </View>
    )
}

export default BuyScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    swapOptionsRow: {
        height: 50,
        flexDirection: "row",
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

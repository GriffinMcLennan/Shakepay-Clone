import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import ShakepayLogo from './../assets/ShakepayLogo.svg'
import BitcoinLogo from './../assets/btc.svg'
import EthereumLogo from './../assets/eth.svg'
import CadLogo from './../assets/mapleLeaf.svg'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Currency from './../components/Currency'
import { basicPrices } from './../services/priceService'
import { useModalContext } from './../contexts/ModalProvider'
import { useUserContext } from './../contexts/UserProvider'
import { db } from './../firebase'
import { useIsFocused } from "@react-navigation/native";
import { truncate } from './../services/truncate'

const HomeScreen = () => {
    const [bitcoinPrice, setBitcoinPrice] = useState("0");
    const [ethereumPrice, setEthereumPrice] = useState("0");
    const { toggleFundingModalVisible } = useModalContext();
    const [dollarAmount, setDollarAmount] = useState(0);
    const [bitcoinAmount, setBitcoinAmount] = useState(0);
    const [ethereumAmount, setEthereumAmount] = useState(0);
    const { uid } = useUserContext();
    const total = dollarAmount + bitcoinAmount * bitcoinPrice + ethereumAmount * ethereumPrice;
    const isFocused = useIsFocused();

    useEffect(() => {
        const fetchPrices = async () => {
            const { btcPrice, ethPrice } = await basicPrices();
            setBitcoinPrice(btcPrice);
            setEthereumPrice(ethPrice);
        };

        const getUserHoldings = async () => {
            if (uid === null) {
                return;
            }

            const docRef = await db.collection('users').doc(uid);
            const doc = await docRef.get();

            if (doc.exists) {
                const data = doc.data();
                setDollarAmount(Number(data.Dollars));
                setBitcoinAmount(Number(data.Bitcoin));
                setEthereumAmount(Number(data.Ethereum));
            }
        };

        if (isFocused === true) {
            fetchPrices();
            getUserHoldings();
        }
    }, [uid, isFocused]);

    return (
        <View style={styles.homescreen}>
            <ShakepayLogo width={40} height={40} marginTop={10} />
            <Text style={styles.portfolioValue}>${truncate(total.toLocaleString('en-US', { currency: 'USD' }))}</Text>

            <View style={styles.buttons}>
                <Pressable style={styles.button} onPress={() => toggleFundingModalVisible()} >
                    <FontAwesomeIcon icon={faArrowDown} marginRight={10} color={"#42b5fd"} />
                    <Text style={styles.text} >Add funds</Text>
                </Pressable>

                <Pressable style={styles.button}>
                    <FontAwesomeIcon icon={faArrowUp} marginRight={10} color={"#42b5fd"} />
                    <Text style={styles.text}>Send</Text>
                </Pressable>
            </View>

            <ScrollView style={styles.holdings}>
                <Currency name={"Dollars"} amount={dollarAmount} Logo={CadLogo} />
                <Currency name={"Bitcoin"} amount={bitcoinAmount} Logo={BitcoinLogo} price={bitcoinPrice} />
                <Currency name={"Ethereum"} amount={ethereumAmount} Logo={EthereumLogo} price={ethereumPrice} />
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    homescreen: {
        width: "100%",
        alignItems: "center",
        flex: 1,
        backgroundColor: "white",
    },
    portfolioValue: {
        marginTop: 25,
        fontSize: 36,
        fontWeight: "400",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        marginTop: 50,
        marginBottom: 20,
    },
    button: {
        width: "45%",
        backgroundColor: "#f0f5ff",
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        flexDirection: "row",
        borderRadius: 4,
    },
    holdings: {
        width: "100%",
        borderTopWidth: 1,
        borderColor: "#f0f5ff",
    },
    holding: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    text: {
        color: "#42b5fd",
        fontWeight: "700",
        fontSize: 16,
    }
})

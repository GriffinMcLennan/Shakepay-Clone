import React from 'react'
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import ShakepayLogo from './../assets/ShakepayLogo.svg'
import BitcoinLogo from './../assets/btc.svg'
import EthereumLogo from './../assets/eth.svg'
import CadLogo from './../assets/mapleLeaf.svg'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Currency from './../components/Currency'

const HomeScreen = () => {
    return (
        <View style={styles.homescreen}>
            <ShakepayLogo width={40} height={40} marginTop={10} />
            <Text style={styles.portfolioValue}>$55.59</Text>

            <View style={styles.buttons}>
                <Pressable style={styles.button}>
                    <FontAwesomeIcon icon={faArrowDown} marginRight={10} />
                    <Text>Add funds</Text>
                </Pressable>

                <Pressable style={styles.button}>
                    <FontAwesomeIcon icon={faArrowUp} marginRight={10} />
                    <Text>Send</Text>
                </Pressable>
            </View>

            <ScrollView style={styles.holdings}>
                <Currency name={"Dollars"} amount={0} Logo={CadLogo} />
                <Currency name={"Bitcoin"} amount={0.0059} Logo={BitcoinLogo} price={63012} />
                <Currency name={"Ethereum"} amount={3.2} Logo={EthereumLogo} price={4200} />
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
        fontSize: 36
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        marginTop: 50,
        marginBottom: 20,
    },
    button: {
        width: "40%",
        backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        flexDirection: "row",
    },
    holdings: {
        width: "100%",
        borderTopWidth: 1,
        borderColor: "gainsboro",
    },
    holding: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    }
})

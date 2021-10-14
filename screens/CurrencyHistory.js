import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Pressable, ScrollView } from 'react-native'
import { ChartPathProvider, } from '@rainbow-me/animated-charts'
import priceService from './../services/priceService'
import Chart from './../components/Chart'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowDown, faArrowUp, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import Transactions from '../components/Transactions'
import { useModalContext } from './../contexts/ModalProvider'
import HeaderLeft from './../components/HeaderLeft'
import { useUserContext } from './../contexts/UserProvider'
import { db } from './../firebase'
import { useIsFocused } from "@react-navigation/native";
import { truncate } from './../services/truncate'

const link = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=bidaily";
const { width: SIZE } = Dimensions.get("window");
const HOUR = "H";
const DAY = "D";
const WEEK = "W";
const MONTH = "M";
const YEAR = "Y";

const periods = [HOUR, DAY, WEEK, MONTH, YEAR];

const CurrencyHistory = ({ navigation, route }) => {
    const [timePeriod, setTimePeriod] = useState(DAY);
    const [currencyAmount, setCurrencyAmount] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const { name, currentPrice } = route.params;
    const { setFromCurrency, setToCurrency } = useModalContext();
    const { uid } = useUserContext();
    const isFocused = useIsFocused();
    const total = Number(currencyAmount) * Number(currentPrice);


    const setCurrencies = () => {
        if (name === 'Dollars') {
            setFromCurrency("Dollars");
            setToCurrency("Bitcoin")
        }
        else {
            setFromCurrency(name);
            setToCurrency("Dollars");
        }

        navigation.navigate("Buy & sell", { from: name });
    }
    useEffect(() => {
        navigation.setOptions({
            title: name,
            headerStyle: { shadowColor: "transparent" },
            headerLeft: () => (
                <HeaderLeft />
            ),
            headerRight: () => (
                <Pressable style={styles.toTrade} onPress={() => setCurrencies()} >
                    <FontAwesomeIcon icon={faExchangeAlt} size={20} color={"#009FFF"} />
                </Pressable>
            )
        });
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            const userDocRef = db.collection('users').doc(uid);
            const userDoc = await userDocRef.get();
            const data = userDoc.data();

            if (name === 'Bitcoin') {
                setCurrencyAmount(data.Bitcoin);
                setTransactions(data.BitcoinTransactions.reverse());
            }
            else if (name === 'Dollars') {
                setCurrencyAmount(data.Dollars);
                setTransactions(data.DollarTransactions.reverse());
            }
            else if (name === 'Ethereum') {
                setCurrencyAmount(data.Ethereum);
                setTransactions(data.EthereumTransactions.reverse());
            }
        };

        if (isFocused === true) {
            fetchData();
        }
    }, [isFocused]);

    const [hourPrices, setHourPrices] = useState([]);
    const [dayPrices, setDayPrices] = useState([]);
    const [weekPrices, setWeekPrices] = useState([]);
    const [monthPrices, setMonthPrices] = useState([]);
    const [yearPrices, setYearPrices] = useState([]);
    const [startPrice, setStartPrice] = useState("10");

    const changeStartPrice = (newPrice) => {
        setStartPrice(newPrice);
    }

    const periodToArray = {
        H: [hourPrices, setHourPrices],
        D: [dayPrices, setDayPrices],
        W: [weekPrices, setWeekPrices],
        M: [monthPrices, setMonthPrices],
        Y: [yearPrices, setYearPrices]
    };

    useEffect(() => {
        const setData = async () => {
            const arrRef = periodToArray[timePeriod][0];
            const setArrRef = periodToArray[timePeriod][1];

            if (arrRef.length > 0) {
                return;
            }

            const data = await priceService(name, timePeriod);
            setArrRef(data);
        };

        if (name !== "Dollars") {
            setData();
        }
    }, [timePeriod]);


    return (
        <View style={styles.container} >
            <ScrollView>
                {name !== "Dollars" &&
                    <View style={styles.bottomBorder}>
                        <ChartPathProvider data={{ points: periodToArray[timePeriod][0], smoothingStrategy: "bezier", smoothingFactor: "0.3" }}>
                            <Chart SIZE={SIZE} changeStartPrice={(newPrice) => changeStartPrice(newPrice)} startPrice={startPrice} currentPrice={currentPrice} />
                        </ChartPathProvider>

                        <View style={styles.selector}>
                            {
                                periods.map(period => (
                                    <TouchableWithoutFeedback key={period} onPress={() => setTimePeriod(period)}>
                                        <View style={styles.switches}>
                                            <Text style={timePeriod === period && styles.selected}>1{period}</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                ))
                            }

                        </View>
                    </View>
                }
                <View style={styles.balanceRow}>
                    <View style={styles.balanceDescription}>
                        <Text style={styles.balancePrimary}>Balance</Text>
                        {name !== 'Dollars' && <Text style={styles.balanceSecondary}>in CAD</Text>}
                    </View>

                    <View style={styles.balanceValues}>
                        <Text style={styles.balancePrimary}>{truncate(currencyAmount.toString())}</Text>
                        {name !== 'Dollars' && <Text style={styles.balanceSecondary}>${truncate(total.toLocaleString('en-US', { currency: 'USD' }))}</Text>}
                    </View>
                </View>

                <View style={styles.buttons}>
                    <Pressable style={styles.button} onPress={() => toggleFundingOverlay()} >
                        <FontAwesomeIcon icon={faArrowDown} marginRight={10} color={"#42b5fd"} />
                        <Text style={styles.text} >Receive</Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <FontAwesomeIcon icon={faArrowUp} marginRight={10} color={"#42b5fd"} />
                        <Text style={styles.text}>Send</Text>
                    </Pressable>
                </View>

                <Transactions transactionsData={transactions} currency={name} />
            </ScrollView>
        </View>

    )
}

export default CurrencyHistory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    selector: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    switches: {
        width: "20%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    selected: {
        color: "blue",
    },
    balanceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    balanceDescription: {
        margin: 10,
    },
    balanceValues: {
        margin: 10,
        alignItems: "flex-end",
    },
    balancePrimary: {
        fontSize: 20,
        marginBottom: 5,
    },
    balanceSecondary: {
        fontSize: 16,
        color: "#657795",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f5ff",
        height: 65,
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
    text: {
        color: "#42b5fd",
        fontWeight: "700",
        fontSize: 16,
    },
    bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: "#f0f5ff",
    },
    toTrade: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    }
})

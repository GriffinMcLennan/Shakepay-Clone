import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Dimensions, TouchableWithoutFeedback, Pressable, ScrollView } from 'react-native'
import { ChartDot, ChartPath, ChartPathProvider, ChartYLabel, ChartXLabel } from '@rainbow-me/animated-charts'
import priceService from './../services/priceService'
import Chart from './../components/Chart'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowDown, faArrowUp, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Transactions from '../components/Transactions'

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
    const { name, currentPrice } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: name, headerLeft: () => (
                <Pressable onPress={() => navigation.pop()}>
                    <FontAwesomeIcon icon={faChevronLeft} size={20} margin={10} />
                </Pressable>
            ),
        });
    }, []);

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
            const n = data.length;
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
                    <View>
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
                        <Text style={styles.balanceSecondary}>in CAD</Text>
                    </View>

                    <View style={styles.balanceValues}>
                        <Text style={styles.balancePrimary}>0.009434</Text>
                        <Text style={styles.balanceSecondary}>$55.04</Text>
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

                <Transactions currency={name} />
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
        borderTopWidth: 1,
        borderTopColor: "#f0f5ff",
        marginTop: 10,
    },
    balanceDescription: {
        margin: 10,
    },
    balanceValues: {
        margin: 10,
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
})

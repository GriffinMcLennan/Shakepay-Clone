import React, { useEffect, useState, useMemo } from 'react'
import { StyleSheet, Text, View, Button, Dimensions, TouchableWithoutFeedback } from 'react-native'
import axios from "axios"
import { ChartDot, ChartPath, ChartPathProvider, ChartYLabel } from '@rainbow-me/animated-charts'
import priceService from './../services/priceService'

const link = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=bidaily";
const { width: SIZE } = Dimensions.get("window");
const HOUR = "H";
const DAY = "D";
const WEEK = "W";
const MONTH = "M";
const YEAR = "Y";

const periods = [HOUR, DAY, WEEK, MONTH, YEAR];

const CurrencyHistory = ({ navigation, route }) => {
    const [prices, setPrices] = useState([]);
    const [timePeriod, setTimePeriod] = useState(DAY);
    const { name } = route.params;

    const [hourPrices, setHourPrices] = useState([]);
    const [dayPrices, setDayPrices] = useState([]);
    const [weekPrices, setWeekPrices] = useState([]);
    const [monthPrices, setMonthPrices] = useState([]);
    const [yearPrices, setYearPrices] = useState([]);

    const periodToArray = {
        "H": [hourPrices, setHourPrices],
        "D": [dayPrices, setDayPrices],
        "W": [weekPrices, setWeekPrices],
        "M": [monthPrices, setMonthPrices],
        "Y": [yearPrices, setYearPrices]
    };

    useEffect(() => {
        const setData = async () => {
            // const response = await axios.get(link);
            // const prices = response.data.prices;
            // const mapped = prices.map(tuple => ({ x: tuple[0], y: tuple[1] }));
            // setPrices(mapped);

            // console.log(timePeriod);
            // console.log(periodToArray[timePeriod]);

            // console.log(periodToArray[timePeriod]);

            const arrRef = periodToArray[timePeriod][0];
            const setArrRef = periodToArray[timePeriod][1];


            if (arrRef.length > 0) {
                return;
            }

            const data = await priceService(name, timePeriod);
            setArrRef(data);
        };

        setData();
    }, [timePeriod]);

    return (
        <View style={styles.container} >
            <ChartPathProvider data={{ points: periodToArray[timePeriod][0], smoothingStrategy: "bezier", smoothingFactor: 1 }}>
                <ChartYLabel
                    style={{ backgroundColor: "white", color: "green", margin: 4 }}
                />

                <View style={{ backgroundColor: "white", marginTop: 0, }}>
                    <ChartPath height={SIZE / 2} stroke="#009FFF" strokeWidth="2" width={SIZE} />
                    <ChartDot style={{ backgroundColor: "#009FFF" }} />
                </View>
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
            <Button title="Purchase" onPress={() => navigation.navigate("Buy & sell")} />
            <Button title="time1" onPress={() => setTimePeriod("1h")} />

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
    }
})

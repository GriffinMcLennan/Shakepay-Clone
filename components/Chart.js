import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ChartDot, ChartPath, ChartYLabel, ChartXLabel } from '@rainbow-me/animated-charts'
import COLORS from '../constants/theme'

const formatDatetime = value => {
    'worklet';
    if (value === '') {
        return 'Current price';
    }
    const date = new Date(Number(value));
    const s = date.getSeconds();
    const m = date.getMinutes().toString().padStart(2, '0');
    let h = date.getHours();
    const d = date.getDate();
    const n = date.getMonth();
    const y = date.getFullYear();

    let monthStr = '';

    if (n == 1) {
        monthStr = 'January';
    }
    else if (n == 2) {
        monthStr = 'February';
    }
    else if (n == 3) {
        monthStr = 'March';
    }
    else if (n == 4) {
        monthStr = 'April';
    }
    else if (n == 5) {
        monthStr = 'May';
    }
    else if (n == 6) {
        monthStr = 'June';
    }
    else if (n == 7) {
        monthStr = 'July';
    }
    else if (n == 8) {
        monthStr = 'August';
    }
    else if (n == 9) {
        monthStr = 'September';
    }
    else if (n == 10) {
        monthStr = 'October';
    }
    else if (n == 11) {
        monthStr = 'November';
    }
    else {
        monthStr = 'December';
    }

    const AMPM = h >= 12 ? 'PM' : 'AM';

    if (h > 12) {
        h -= 12;
    }

    h = h.toString().padStart(2, '0');

    return `${monthStr} ${d}, ${y} ${h}:${m} ${AMPM}`;
};

const Chart = ({ currentPrice, SIZE }) => {
    const formatPrice = (value) => {
        'worklet';

        if (value === '') {
            return `$${Number(currentPrice).toLocaleString('en-US', { currency: 'USD' })}`;
        }

        return `$${Number(value).toLocaleString('en-US', { currency: 'USD' })}`;
    };


    return (
        <View>
            <ChartXLabel
                format={formatDatetime}
                style={styles.chartX}
            />

            <View style={styles.priceData}>
                <ChartYLabel
                    format={formatPrice}
                    style={styles.chartY}
                />

            </View>

            <View style={styles.background}>
                <ChartPath
                    selectedStrokeWidth="2"
                    selectedOpacity="1"
                    height={SIZE / 2}
                    stroke="#009FFF"
                    strokeWidth="2"
                    width={SIZE}
                />
                <ChartDot
                    style={styles.chartDot}
                />

            </View>

        </View>
    )
}

export default Chart

const styles = StyleSheet.create({
    priceData: {
        flexDirection: "row",
        marginBottom: 20,
    },
    chartX: {
        backgroundColor: "white",
        color: COLORS.lightGray,
        marginLeft: 10,
        marginTop: 10,
        fontSize: 18
    },
    chartY: {
        backgroundColor: "white",
        color: "black",
        marginLeft: 10,
        marginTop: 5,
        fontSize: 22
    },
    background: {
        backgroundColor: "white",
        marginTop: 0,
    },
    chartDot: {
        backgroundColor: COLORS.lightBlue,
    },
})

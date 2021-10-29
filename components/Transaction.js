import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { faExchangeAlt, faUpload, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import COLORS from '../constants/theme'

const GREEN = "#37c197";
const BLUE = "#009FFF";
const ORANGE = "#f59117";

const Transaction = ({ type, date, amount, address, currency }) => {
    const [icon, setIcon] = useState("");
    const [color, setColor] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (type === "Buy" || type === "Sell") {
            setColor(BLUE);
            setIcon(faExchangeAlt);
            const msg = type === "Buy" ? "Bought" : "Sold";
            setMessage(`${msg} ${currency}`);
        }
        else if (type === "Send") {
            setColor(ORANGE);
            setIcon(faUpload);
            setMessage(`${currency} Blockchain`);
        }
        else if (type === "Receive") {
            setColor(GREEN);
            setIcon(faDownload);
            setMessage(`${currency} Blockchain`);
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.transaction}>
                <View style={styles.row}>
                    {
                        icon !== "" && <FontAwesomeIcon
                            icon={icon}
                            color={color}
                            marginTop={4}
                        />
                    }

                    <View style={styles.transactionInfo}>
                        {message !== '' && <Text style={styles.transactionTitle}>{message}</Text>}
                        {address !== undefined && <Text style={styles.transactionAddress}>{address}</Text>}
                        {date !== '' && <Text style={styles.transactionDate}>{date}</Text>}
                    </View>
                </View>


                <View style={styles.transactionAmount}>
                    <Text style={{ color: (type === 'Receive' || type === "Buy") ? GREEN : "black" }}>{amount}</Text>
                </View>
            </View>
        </View>
    )
}

export default Transaction

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    transaction: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    row: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    transactionInfo: {
        marginLeft: 20,
    },
    transactionAmount: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontWeight: "500",
    },
    transactionTitle: {
        fontSize: 16,
        marginBottom: 7,
    },
    transactionAddress: {
        fontSize: 12,
        color: COLORS.lightGray,
        marginBottom: 3,
    },
    transactionDate: {
        fontSize: 12,
        color: COLORS.lightGray,
        fontWeight: "500",
        marginBottom: 6,
    }
})

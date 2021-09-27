import React from 'react'
import { StyleSheet, View } from 'react-native'
import NumButton from './NumButton'

const ROW1 = ["1", "2", "3"];
const ROW2 = ["4", "5", "6"];
const ROW3 = ["7", "8", "9"];
const ROW4 = [".", "0", "back"];
const ROWS = [ROW1, ROW2, ROW3, ROW4];

const NumPad = (functions) => {
    return (
        <View style={styles.container}>
            {
                ROWS.map(row => (
                    <View style={styles.rowStyle} key={row}>
                        {
                            row.map(keyVal => (
                                <NumButton
                                    key={keyVal}
                                    numStr={keyVal}
                                    {...functions}
                                />
                            ))
                        }
                    </View>
                ))
            }
        </View>
    )
}

export default NumPad

const styles = StyleSheet.create({
    container: {
        height: 280,
    },
    rowStyle: {
        height: 70,
        flexDirection: "row",
    },
})

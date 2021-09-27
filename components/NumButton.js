import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons'

const NumButton = ({ numStr, numberPressed, undoNumberPressed, decimalPressed }) => {
    const handlePress = () => {
        if (numStr === 'back') {
            undoNumberPressed();
        }
        else if (numStr === '.') {
            decimalPressed();
        }
        else {
            numberPressed(numStr);
        }
    }
    return (
        <Pressable style={styles.container} onPress={() => handlePress()} >
            {
                numStr !== "back" ? (
                    <Text style={styles.number}>{numStr}</Text>

                ) :
                    (
                        <FontAwesomeIcon icon={faBackspace} size={24} />
                    )
            }
        </Pressable>
    )
}

export default NumButton

const styles = StyleSheet.create({
    container: {
        flex: 33,
        justifyContent: "center",
        alignItems: "center",
    },
    number: {
        fontSize: 24,
    }
})

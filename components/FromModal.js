import React from 'react'
import { StyleSheet, Text, View, Pressable, TouchableWithoutFeedback } from 'react-native'
import { Dimensions } from 'react-native'
import { useModalContext } from '../contexts/ModalProvider'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const OPTIONS = [{ name: "Ethereum", id: "Ethereum", last: 1 }, { name: "Bitcoin", id: "Bitcoin" }, { name: "Canadian Dollars", id: "Dollars" }];

const FromModal = () => {
    const { toggleFromModalVisible, setFromCurrency, setToCurrency } = useModalContext();

    const switchCurrencies = (newFromCurrency) => {
        setFromCurrency(newFromCurrency);

        if (newFromCurrency === "Dollars") {
            setToCurrency("Bitcoin");
        }
        else {
            setToCurrency("Dollars");
        }
    }

    return (
        <TouchableWithoutFeedback onPress={toggleFromModalVisible} >
            <View style={styles.dominant}>
                <Pressable style={[styles.modal, styles.closeModal]} onPress={() => toggleFromModalVisible()} >
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "#1e86f6" }}>Cancel</Text>
                </Pressable>

                <View style={styles.flexReverse}>
                    {
                        OPTIONS.map(tuple => (
                            <Pressable
                                key={tuple.id}
                                onPress={() => {
                                    switchCurrencies(tuple.id);
                                    toggleFromModalVisible();
                                }}
                                style={[styles.option, !tuple.last && styles.borderBottom]}>
                                <Text style={styles.text}>{tuple.name}</Text>
                            </Pressable>
                        ))
                    }
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FromModal

const styles = StyleSheet.create({
    dominant: {
        position: "absolute",
        top: -200,
        zIndex: 1000,
        width: windowWidth,
        height: windowHeight + 200,
        backgroundColor: 'rgba(0, 0, 0, 0.23)',
        alignItems: "center",
    },
    modal: {
        position: "absolute",
        width: "95%",
        backgroundColor: "#f0f0f0",
        borderRadius: 15,
    },
    closeModal: {
        bottom: 80,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    flexReverse: {
        position: "absolute",
        bottom: 150,
        flexDirection: "column-reverse",
        backgroundColor: "#f0f0f0",
        borderRadius: 15,
        width: "95%",
        alignItems: "center",
    },
    option: {
        paddingTop: 17,
        paddingBottom: 17,
        width: "100%",
        alignItems: "center",
    },
    text: {
        color: "#1e86f6",
        fontSize: 18,
        fontWeight: "500",
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    }
})

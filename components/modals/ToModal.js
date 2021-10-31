import React from 'react'
import { StyleSheet, Text, View, Pressable, TouchableWithoutFeedback } from 'react-native'
import { Dimensions } from 'react-native'
import { useModalContext } from './../../contexts/ModalProvider'
import COLORS from '../../constants/theme'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DOLLAR_OPTION = [
    {
        name: "Ethereum",
        id: "Ethereum",
        last: 1
    },
    {
        name: "Bitcoin",
        id: "Bitcoin"
    }
];
const CRYPTO_OPTION = [
    {
        name: "Canadian Dollars",
        id: "Dollars"
    }
];

const ToModal = () => {
    const { toggleToModalVisible, setToCurrency, fromCurrency } = useModalContext();
    const OPTIONS = fromCurrency === "Dollars" ? DOLLAR_OPTION : CRYPTO_OPTION;

    const switchCurrencies = (newToCurrency) => {
        setToCurrency(newToCurrency);
    }

    return (
        <TouchableWithoutFeedback onPress={toggleToModalVisible} >
            <View style={styles.dominant}>
                <Pressable
                    style={[
                        styles.modal,
                        styles.closeModal
                    ]}
                    onPress={() => toggleToModalVisible()}
                >
                    <Text style={styles.cancelText}>Cancel</Text>
                </Pressable>

                <View style={styles.flexReverse}>
                    {
                        OPTIONS !== undefined &&
                        OPTIONS.map(tuple => (
                            <Pressable
                                key={tuple.id}
                                onPress={() => {
                                    switchCurrencies(tuple.id);
                                    toggleToModalVisible();
                                }}
                                style={[
                                    styles.option,
                                    !tuple.last && styles.borderBottom
                                ]}>
                                <Text style={styles.text}>{tuple.name}</Text>
                            </Pressable>
                        ))
                    }
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ToModal

const styles = StyleSheet.create({
    dominant: {
        position: "absolute",
        top: -200,
        zIndex: 1000,
        width: windowWidth,
        height: windowHeight + 200,
        backgroundColor: COLORS.modalShadowGray,
        alignItems: "center",
    },
    modal: {
        position: "absolute",
        width: "95%",
        backgroundColor: COLORS.darkGray,
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
        backgroundColor: COLORS.darkGray,
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
        color: COLORS.blue,
        fontSize: 18,
        fontWeight: "500",
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.borderColor,
    },
    cancelText: {
        fontWeight: "bold",
        fontSize: 20,
        color: COLORS.blue,
    },
})

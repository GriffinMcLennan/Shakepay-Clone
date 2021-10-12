import React from 'react'
import { StyleSheet, Text, View, Pressable, Modal, Image } from 'react-native'
import InteracLogo from './../assets/interac_logo.png'
import { useModalContext } from './../contexts/ModalProvider'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCopy, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useUserContext } from './../contexts/UserProvider'

const InteracModal = () => {
    const { toggleInteracModalVisible } = useModalContext();
    const { shaketag } = useUserContext();

    return (
        <View style={styles.modalView}>
            <Modal
                animationType="slide"
            >
                <View style={styles.container}>
                    <Pressable
                        onPress={() => toggleInteracModalVisible()}
                        style={{ flexDirection: "row", height: 30, width: "100%", justifyContent: "flex-end", alignItems: "center", marginRight: 10, paddingTop: 20 }}
                    >
                        <View style={{ width: 50, height: 50, alignItems: "center", }}>
                            <FontAwesomeIcon icon={faTimes} size={22} />
                        </View>
                    </Pressable>
                    <Image source={InteracLogo} style={{ height: 80, width: 80, marginTop: 100, }} />

                    <Text style={styles.title}>Important Instructions</Text>

                    <Text style={styles.instruction}>1. Send your Interac e-Transfer to:</Text>

                    <View style={styles.box}>
                        <View style={styles.boxRow}>
                            <Text style={styles.boxText}>funding@etransfers.shakepay.com</Text>
                            <FontAwesomeIcon icon={faCopy} color={"#059fff"} />
                        </View>
                    </View>

                    <Text style={styles.instruction}>2. Use your shaketag (without the @) as the security question</Text>

                    <View style={styles.box}>
                        <View style={styles.boxRow}>
                            <Text style={styles.boxText}>${shaketag}</Text>
                            <FontAwesomeIcon icon={faCopy} color={"#059fff"} />
                        </View>
                    </View>
                    <Text style={styles.instruction}>3. Use this code as the security answer:</Text>

                    <View style={styles.box}>
                        <View style={styles.boxRow}>
                            <Text style={[styles.boxText, { fontSize: 16 }]}>32NGDF32N</Text>
                            <FontAwesomeIcon icon={faCopy} color={"#059fff"} />
                        </View>
                    </View>

                    <Text style={styles.disclaimer}>
                        <Text>It can take </Text>
                        <Text style={{ color: "black", fontWeight: "600" }}>up to one hour </Text>
                        <Text>for Shakepay to receive the transfer.</Text>
                    </Text>
                </View>
            </Modal>
        </View>
    )
}

export default InteracModal

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 55,
    },
    title: {
        marginTop: 25,
        fontWeight: "500",
        fontSize: 20,
    },
    instruction: {
        width: "85%",
        alignItems: "flex-start",
        fontSize: 16,
        marginTop: 20,
    },
    box: {
        backgroundColor: "#f0f7ff",
        height: 35,
        borderRadius: 5,
        padding: 5,
        marginTop: 10,
        justifyContent: "center",
        width: "85%",
        marginBottom: 10,
    },
    boxRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    boxText: {
        color: "#059fff",
        fontWeight: "600",
    },
    disclaimer: {
        color: "#455d87",
        fontSize: 14,
        marginTop: 15,
    }
})

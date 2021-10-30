import React from 'react'
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCopy, faTimes } from '@fortawesome/free-solid-svg-icons'
import BitcoinLogo from './../../assets/btc.svg'
import QRCode from 'react-native-qrcode-svg';
import { useModalContext } from '../../contexts/ModalProvider'
import COLORS from '../../constants/theme'

const BitcoinModal = () => {
    const { toggleBitcoinModalVisible } = useModalContext();
    return (
        <Modal
            animationType="slide"
        >
            <View style={styles.container}>
                <Pressable
                    style={styles.exit}
                    onPress={() => toggleBitcoinModalVisible()}
                >
                    <FontAwesomeIcon
                        icon={faTimes}
                        size={22}
                    />
                </Pressable>

                <BitcoinLogo
                    height={50}
                    width={50}
                    marginTop={90}
                />

                <Text style={styles.header}>
                    Only send <Text style={styles.bold}>Bitcoin (BTC)</Text> to this address.
                </Text>

                <Text style={styles.description}>
                    Sending Bitcoin Cash (BCH), or any other digital currency, is not supported
                    and will result in permanent loss. Funds available after 2 confirmations.
                </Text>

                <QRCode
                    value="141Ey9kBuCwXmJKXR8MgvcVwGjjpUHw4Nu"
                    size={200}
                />

                <View style={styles.box}>
                    <View style={styles.boxRow}>
                        <Text style={[styles.boxText, { fontSize: 12 }]}>141Ey9kBuCwXmJKXR8MgvcVwGjjpUHw4Nu</Text>
                        <FontAwesomeIcon icon={faCopy} color={COLORS.lightBlue} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default BitcoinModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: "white",
        alignItems: "center",
    },
    exit: {
        marginLeft: "auto",
        marginRight: 10,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: "400",
        marginBottom: 20,
    },
    bold: {
        fontWeight: "500",
    },
    description: {
        color: "gray",
        fontSize: 14,
        paddingLeft: 27,
        paddingRight: 27,
        textAlign: "center",
        marginBottom: 45,
    },
    box: {
        backgroundColor: COLORS.mildGray,
        height: 35,
        borderRadius: 5,
        padding: 5,
        marginTop: 40,
        justifyContent: "center",
        width: "85%",
        marginBottom: 10,
    },
    boxRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    boxText: {
        color: COLORS.lightBlue,
        fontWeight: "600",
    },
})

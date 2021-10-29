import React from 'react'
import { StyleSheet, Text, View, Modal, Image, Pressable } from 'react-native'
import ShakepayLogo from '../../assets/ShakepayLogo.svg'
import ShakepayFox from '../../assets/fox.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'
import { useModalContext } from './../../contexts/ModalProvider'
import { useNavigation } from '@react-navigation/native'
import GradientButton from '../GradientButton'
import COLORS from '../../constants/theme'

const ShakingModal = () => {
    const { toggleShakingModalVisible } = useModalContext();
    const navigation = useNavigation();

    return (
        <Modal
            animation="slide"
        >
            <View style={styles.container}>
                <ShakepayLogo width={60} height={60} />
                <Text style={styles.title}>Too much shakin'</Text>
                <Text style={styles.subtitle}>Want more sats? Refer a friend!</Text>
                <Image
                    source={ShakepayFox}
                    style={styles.fox}
                />
                <Text style={[styles.title, { marginTop: 10 }]}>#ShakingSats</Text>

                <View style={styles.box}>
                    <View style={styles.streakCount}>
                        <View style={styles.row}>
                            <FontAwesomeIcon
                                icon={faFireAlt}
                                color={"orange"}
                                size={20}
                            />
                            <Text style={styles.boxHeader}>$ day streak!</Text>
                        </View>
                        <Text style={[styles.subtitle, { marginTop: 5 }]}>See you tomorrow!</Text>
                    </View>
                </View>

                <GradientButton
                    text="Earn $10 by referring a friend"
                    onPress={() => {
                        navigation.navigate("Buy & sell", { from: "Bitcoin" });
                        toggleShakingModalVisible();
                    }}
                />

                <Pressable
                    style={styles.closeBox}
                    onPress={() => toggleShakingModalVisible()}
                >
                    <Text style={styles.closeBoxText}>Close</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

export default ShakingModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: "center",
    },
    title: {
        marginTop: 20,
        fontSize: 22,
        fontWeight: "500",
    },
    subtitle: {
        marginTop: 10,
        fontSize: 16,
        color: COLORS.lightGray,
    },
    fox: {
        marginTop: 50,
        resizeMode: "contain",
        height: 200,
    },
    box: {
        backgroundColor: COLORS.mildGray,
        height: 80,
        marginTop: 65,
        justifyContent: "center",
        width: "90%",
        marginBottom: 10,
        alignItems: "center",
    },
    boxHeader: {
        fontWeight: "600",
        fontSize: 16,
    },
    streakCount: {
        fontWeight: "500",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    refBox: {
        height: 50,
        width: "90%",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
    },
    refText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        backgroundColor: 'transparent',
    },
    button: {
        height: 50,
        width: "90%",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center',
    },
    closeBox: {
        width: "90%",
        height: 50,
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: COLORS.lightBlue,
        marginTop: 20,
    },
    closeBoxText: {
        color: COLORS.lightBlue,
        fontSize: 16,
        fontWeight: "600",
    }
})

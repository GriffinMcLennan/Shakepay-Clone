import React from 'react'
import { StyleSheet, Text, View, Modal, Image } from 'react-native'
import ShakepayLogo from './../assets/ShakepayLogo.svg'
import ShakepayFox from './../assets/fox.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'
import { LinearGradient } from 'expo-linear-gradient'


const ShakingModal = () => {
    return (
        <Modal
            animation="slide"
            visible={true}
        >
            <View style={styles.container}>
                <ShakepayLogo width={60} height={60} />
                <Text style={styles.title}>Too much shakin'</Text>
                <Text style={styles.subtitle}>Want more sats? Refer a friend!</Text>
                <Image source={ShakepayFox} style={styles.fox} />
                <Text style={[styles.title, { marginTop: 10 }]}>#ShakingSats</Text>

                <View style={styles.box}>
                    <View style={styles.streakCount}>
                        <View style={styles.row}>
                            <FontAwesomeIcon icon={faFireAlt} color={"orange"} size={20} />
                            <Text style={styles.boxHeader}>$ day streak!</Text>
                        </View>
                        <Text style={[styles.subtitle, { marginTop: 5 }]}>See you tomorrow!</Text>
                    </View>
                </View>

                <LinearGradient
                    colors={['#009fff', '#00c8ff']}
                    style={styles.refBox}
                    start={[0.5, 1]}
                    end={[1, 1]}
                >
                    <Text style={styles.refText}>Earn $10 by referring a friend</Text>
                </LinearGradient>

                <View style={styles.closeBox}>
                    <Text style={styles.closeBoxText}>Close</Text>
                </View>
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
        color: "#455d87",
    },
    fox: {
        marginTop: 50,
        resizeMode: "contain",
        height: 200,
    },
    box: {
        backgroundColor: "#f0f7ff",
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
        borderColor: "#009fff",
        marginTop: 20,
    },
    closeBoxText: {
        color: "#009fff",
        fontSize: 16,
        fontWeight: "600",
    }
})

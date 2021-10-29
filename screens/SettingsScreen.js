import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import ReferralInfo from './../components/ReferralInfo'
import SettingOption from './../components/SettingOption'
import { useUserContext } from './../contexts/UserProvider'
import COLORS from '../constants/theme'

const SettingsScreen = ({ navigation }) => {
    const { logout, shaketag, email } = useUserContext();

    return (
        <View style={styles.container} >
            <Text style={styles.header}>Settings</Text>
            <ScrollView>
                <View style={styles.leftBuffer}>
                    {shaketag &&
                        <Text style={styles.greetingText}>
                            Hello <Text style={styles.bold}>@{shaketag}</Text>
                        </Text>
                    }

                    <View style={styles.row}>
                        <FontAwesomeIcon
                            icon={faCheckSquare}
                            size={20}
                            color={COLORS.lightBlue}
                        />
                        <Text style={styles.infoText}>Account verified</Text>
                    </View>

                    <View style={styles.row}>
                        <FontAwesomeIcon
                            icon={faCheckSquare}
                            size={20}
                            color={COLORS.lightBlue}
                        />
                        {email && <Text style={styles.infoText}>{email}</Text>}
                    </View>

                    <View style={styles.row}>
                        <FontAwesomeIcon
                            icon={faCheckSquare}
                            size={20}
                            color={COLORS.lightBlue}
                        />
                        <Text style={styles.infoText}>(204)781-1986</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.interacText}>
                            Interac security answer: <Text style={styles.interacCode}>ERMSDNDH</Text>
                        </Text>
                    </View>

                    <Text style={styles.referrals}>My referrals</Text>

                    <ReferralInfo />
                </View>

                <SettingOption title="Refer a friend" />
                <SettingOption title="Security & privacy" />
                <SettingOption title="Help" />
                <SettingOption title="Price alerts" />
                <SettingOption title="Request transaction summary" />
                <SettingOption title="Blog" />
                <SettingOption title="Legal" />
                <SettingOption title="App version" />
                <SettingOption
                    title="Log out"
                    onPress={() => logout()}
                />


            </ScrollView>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    header: {
        fontSize: 20,
        fontWeight: "400",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
    },
    leftBuffer: {
        marginLeft: 10,
        marginBottom: 10,
    },
    greetingText: {
        fontSize: 20,
        fontWeight: "400",
        marginTop: 25,
    },
    bold: {
        fontWeight: "500",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        height: 20,
        marginTop: 19,
    },
    infoText: {
        marginLeft: 7,
        fontWeight: "400",
    },
    interacText: {
        marginTop: 3,
        fontSize: 16,
        fontWeight: "400",
    },
    interacCode: {
        color: COLORS.lightBlue,
        fontWeight: "600",
    },
    referrals: {
        fontWeight: "400",
        fontSize: 16,
        marginTop: 30,
    }
})

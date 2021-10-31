import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import HeaderLeft from './../components/HeaderLeft'
import GradientButton from './../components/GradientButton'
import { useUserContext } from './../contexts/UserProvider'
import COLORS from '../constants/theme'

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useUserContext();

    useEffect(() => {
        navigation.setOptions({
            title: "",
            headerStyle: { shadowColor: "transparent" },
            headerLeft: () => (
                <HeaderLeft />
            ),
            headerRight: () => (
                <></>
            )
        });
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={100}
        >
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    height: "90%",
                }}
            >
                <View style={styles.scrollContainer}>
                    <View style={styles.center}>
                        <Text style={styles.title}>Log in to Shakepay</Text>

                        <View style={styles.box}>
                            <View style={styles.boxRow}>
                                <TextInput
                                    style={styles.boxText}
                                    onChangeText={(text) => setEmail(text)}
                                    value={email}
                                    placeholder="Email"
                                    placeholderTextColor="#6581b3"
                                    autoFocus
                                />
                            </View>
                        </View>

                        <View style={styles.box}>
                            <View style={styles.boxRow}>
                                <TextInput
                                    style={styles.boxText}
                                    onChangeText={(text) => setPassword(text)}
                                    value={password}
                                    placeholder="Password"
                                    placeholderTextColor="#6581b3"
                                    autofocus
                                    secureTextEntry
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <GradientButton
                    text="Log in"
                    onPress={() => login(email, password)}
                />
            </View>

        </KeyboardAvoidingView >
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "white",
    },
    title: {
        fontWeight: "500",
        fontSize: 22,
        marginTop: 10,
    },
    scrollContainer: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
    box: {
        backgroundColor: COLORS.mildGray,
        height: 50,
        borderRadius: 5,
        padding: 5,
        marginTop: 20,
        justifyContent: "center",
        width: "90%",
        marginBottom: 10,
    },
    boxRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    boxText: {
        fontWeight: "400",
        marginLeft: 5,
        fontSize: 16,
        width: "100%",
        height: "100%",
    },
    center: {
        marginLeft: "auto",
        marginRight: "auto",
    }
})

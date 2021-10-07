import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, TextInput } from 'react-native'
import { CheckBox } from 'react-native-elements'
import HeaderLeft from './../components/HeaderLeft'
import GradientButton from './../components/GradientButton'
import { useUserContext } from './../contexts/UserProvider'

const RegisterScreen = ({ navigation }) => {
    const [shaketag, setShaketag] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tosState, setTosState] = useState(false);
    const { signUp } = useUserContext();

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
                        <Text style={styles.title}>Welcome to Shakepay!</Text>
                        <Text style={styles.description}>Let's create your account</Text>
                        <View style={styles.box}>
                            <View style={styles.boxRow}>
                                <TextInput
                                    style={styles.boxText}
                                    onChangeText={(text) => setShaketag(text)}
                                    value={shaketag}
                                    placeholder="@shaketag (like a username)"
                                    placeholderTextColor="#6581b3"
                                    autoFocus
                                />
                            </View>
                        </View>

                        <View style={styles.box}>
                            <View style={styles.boxRow}>
                                <TextInput
                                    style={styles.boxText}
                                    onChangeText={(text) => setEmail(text)}
                                    value={email}
                                    placeholder="Email"
                                    placeholderTextColor="#6581b3"
                                    autofocus
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

                        <CheckBox
                            title={
                                <Text style={styles.tos}>
                                    I agree with the <Text style={styles.tosHighlight}>Terms of Use </Text>
                                    and <Text style={styles.tosHighlight}>
                                        Privacy Policy.
                                    </Text>
                                </Text>
                            }
                            checked={tosState}
                            containerStyle={{ backgroundColor: "transparent", borderWidth: 0, }}
                            onPress={() => setTosState(!tosState)}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <GradientButton
                    text="Continue"
                    onPress={() => {
                        signUp(email, password)
                    }}
                />
            </View>
        </KeyboardAvoidingView >
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "white",
    },
    title: {
        fontWeight: "500",
        fontSize: 22,
        marginTop: 20,
    },
    scrollContainer: {
        flex: 1,
        height: "100%",
        width: "100%",
    },
    box: {
        backgroundColor: "#f0f7ff",
        height: 50,
        borderRadius: 5,
        padding: 5,
        justifyContent: "center",
        width: "90%",
        marginTop: 10,
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
    },
    description: {
        marginTop: 10,
        color: "#6581b3",
        marginBottom: 15,
    },
    tos: {
        fontSize: 12,
    },
    tosHighlight: {
        color: "#009FFF",
        fontWeight: "bold",
    }
})

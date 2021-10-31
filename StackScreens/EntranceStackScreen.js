import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import EntranceScreen from './../screens/EntranceScreen'
import SignInScreen from './../screens/SignInScreen'
import RegisterScreen from './../screens/RegisterScreen'
import COLORS from '../constants/theme'

const EntranceStack = createStackNavigator();

const EntranceStackScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <EntranceStack.Navigator>
                    <EntranceStack.Screen
                        name="Entrance"
                        component={EntranceScreen}
                        options={{ headerShown: false }}
                    />
                    <EntranceStack.Screen
                        name="Sign In"
                        component={SignInScreen}
                    />
                    <EntranceStack.Screen
                        name="Register"
                        component={RegisterScreen}
                    />
                </EntranceStack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

export default EntranceStackScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        marginTop: 40,
    },
    details: {
        marginTop: 35,
        fontSize: 22,
        fontWeight: "600",
        textAlign: "center",
        paddingLeft: 30,
        paddingRight: 30,
    },
    highlight: {
        color: COLORS.lightBlue,
        fontWeight: "bold",
    },
})

import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import EntranceScreen from './../screens/EntranceScreen'
import SignInScreen from './../screens/SignInScreen'
import Test from './../components/Test'
const EntranceStack = createStackNavigator();

const EntranceStackScreen = () => {
    // const arr = [{ color: "purple", opacity: 0.3 }];
    // console.log(...arr);

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <EntranceStack.Navigator>
                    <EntranceStack.Screen name="Entrance" component={EntranceScreen} options={{ headerShown: false }} />
                    <EntranceStack.Screen name="Sign In" component={SignInScreen} />
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
        color: "#009FFF",
        fontWeight: "bold",
    },
})

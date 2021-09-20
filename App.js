import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import CardScreen from './screens/CardScreen'
import SendScreen from './screens/SendScreen'
import SettingsScreen from './screens/SettingsScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faWallet, faCreditCard, faDollarSign, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import TradeButton from './components/TradeButton'
import TradeModal from './components/TradeModal'
import MyTabs from './navigation/MyTabs'

const Tab = createBottomTabNavigator();

export default function App() {
    const [overlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisible(!overlayVisible);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, width: "100%" }}
            >

                {
                    overlayVisible && <TradeModal toggleOverlay={toggleOverlay} />
                }

                <NavigationContainer>
                    <MyTabs toggleOverlay={toggleOverlay} />
                </NavigationContainer>

            </KeyboardAvoidingView>
            <StatusBar style="auto" />
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
});

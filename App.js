import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import CardScreen from './screens/CardScreen'
import SendScreen from './screens/SendScreen'
import SettingsScreen from './screens/SettingsScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faWallet, faCreditCard, faDollarSign, faExchangeAlt, faHistory, faTags } from '@fortawesome/free-solid-svg-icons'
import TradeButton from './components/TradeButton'
import TradeModal from './components/TradeModal'

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
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let icon = null;
                                let iconColor = focused ? "dodgerblue" : "darkgray";

                                switch (route.name) {
                                    case "Home":
                                        icon = faWallet;
                                        break;
                                    case "Card":
                                        icon = faCreditCard;
                                        break;
                                    case "Trade":
                                        icon = faExchangeAlt;
                                        break;
                                    case "Send":
                                        icon = faDollarSign;
                                        break;
                                    case "Settings":
                                        icon = faCog;
                                        break;
                                    default:
                                        break;
                                }

                                return route.name === "Trade" ? (
                                    <TradeButton toggleOverlay={toggleOverlay} />
                                )
                                    : (
                                        <FontAwesomeIcon icon={icon} size={20} color={iconColor} />
                                    )
                            },
                            headerShown: false,
                        })}
                    >
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen name="Card" component={CardScreen} />
                        <Tab.Screen name="Trade" component={HomeScreen} />
                        <Tab.Screen name="Send" component={SendScreen} />
                        <Tab.Screen name="Settings" component={SettingsScreen} />
                    </Tab.Navigator>
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

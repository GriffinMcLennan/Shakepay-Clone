import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import TradeModal from './components/TradeModal'
import FundingModal from './components/FundingModal';
import MyTabs from './navigation/MyTabs'
import BuyScreen from './screens/BuyScreen'
import RecurringBuysScreen from './screens/RecurringBuysScreen'
import LimitOrdersScreen from './screens/LimitOrdersScreen'

const Stack = createStackNavigator();

export default function App() {
    const [tradeOverlayVisible, setTradeOverlayVisible] = useState(false);
    const [fundingOverlayVisible, setFundingOverlayVisible] = useState(false);


    const toggleTradeOverlay = () => {
        setTradeOverlayVisible(!tradeOverlayVisible);
    }

    const toggleFundingOverlay = () => {
        setFundingOverlayVisible(!fundingOverlayVisible);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, width: "100%" }}
            >
                <NavigationContainer>

                    {
                        tradeOverlayVisible && <TradeModal toggleOverlay={toggleTradeOverlay} />
                    }

                    {
                        fundingOverlayVisible && <FundingModal toggleOverlay={toggleFundingOverlay} />
                    }

                    <Stack.Navigator>
                        <Stack.Screen
                            name="App"
                            children={() => <MyTabs
                                toggleTradeOverlay={toggleTradeOverlay} toggleFundingOverlay={toggleFundingOverlay}
                            />}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen name="Buy & sell" component={BuyScreen} />
                        <Stack.Screen name="Recurring buys" component={RecurringBuysScreen} />
                        <Stack.Screen name="Limit orders" component={LimitOrdersScreen} />
                    </Stack.Navigator>
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

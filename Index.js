import { StatusBar } from 'expo-status-bar'
import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import TradeModal from './components/TradeModal'
import FundingModal from './components/FundingModal';
import MyTabs from './navigation/MyTabs'
import BuyScreen from './screens/BuyScreen'
import RecurringBuysScreen from './screens/RecurringBuysScreen'
import LimitOrdersScreen from './screens/LimitOrdersScreen'
import { useModalContext } from './contexts/ModalProvider'
import InteracModal from './components/InteracModal'
import ShakingModal from './components/ShakingModal'

const Stack = createStackNavigator();

export default function Index() {
    const {
        tradeModalVisible,
        toggleTradeModalVisible,
        fundingModalVisible,
        toggleFundingModalVisible,
        interacModalVisible,
    } = useModalContext();


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, width: "100%" }}
            >
                <NavigationContainer>
                    {tradeModalVisible && <TradeModal />}

                    {fundingModalVisible && <FundingModal />}

                    {interacModalVisible && <InteracModal />}

                    {<ShakingModal />}

                    <Stack.Navigator>
                        <Stack.Screen
                            name="App"
                            component={MyTabs}
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

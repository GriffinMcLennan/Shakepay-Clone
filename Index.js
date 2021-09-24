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
import { ModalProvider, useModalContext } from './contexts/ModalProvider'

const Stack = createStackNavigator();

export default function App() {
    // const [tradeOverlayVisible, setTradeOverlayVisible] = useState(false);
    const [fundingOverlayVisible, setFundingOverlayVisible] = useState(false);

    const {
        tradeModalVisible,
        toggleTradeModalVisible,
        fundingModalVisible,
        toggleFundingModalVisible,
    } = useModalContext();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, width: "100%" }}
            >
                <NavigationContainer>
                    <ModalProvider>
                        {tradeModalVisible && <TradeModal toggleOverlay={toggleTradeModalVisible} />}

                        {fundingModalVisible && <FundingModal toggleOverlay={toggleFundingModalVisible} />}



                        <Stack.Navigator>
                            <Stack.Screen
                                name="App"
                                children={() => <MyTabs
                                    toggleTradeOverlay={toggleTradeModalVisible} toggleFundingOverlay={toggleFundingModalVisible}
                                />}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen name="Buy & sell" component={BuyScreen} />
                            <Stack.Screen name="Recurring buys" component={RecurringBuysScreen} />
                            <Stack.Screen name="Limit orders" component={LimitOrdersScreen} />
                        </Stack.Navigator>
                    </ModalProvider>
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

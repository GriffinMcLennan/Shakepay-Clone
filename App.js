import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import CardScreen from './screens/CardScreen'
import SendScreen from './screens/SendScreen'
import SettingsScreen from './screens/SettingsScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faWallet, faCreditCard, faDollarSign, faExchangeAlt, faHistory, faTags } from '@fortawesome/free-solid-svg-icons'
import TradeButton from './components/TradeButton'
import TradeModalOption from './components/TradeModalOption';
import { Dimensions } from 'react-native';

//undo

const Tab = createBottomTabNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const navigation = useNavigation();

    const toggleOverlay = () => {
        setOverlayVisible(!overlayVisible);
    }
    // console.log(overlayVisible);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, width: "100%" }}
            >

                {
                    // Create TradeModal component
                    overlayVisible && <TouchableWithoutFeedback onPress={toggleOverlay} >
                        <View style={styles.dominant}>
                            <TouchableWithoutFeedback onPress={() => alert("You clicked")}>
                                <View style={[styles.modal, styles.infoModal]}>
                                    <TradeModalOption title="Buy & sell" description="Buy and sell at current prices" Icon={faExchangeAlt} />
                                    <TradeModalOption title="Recurring buys" description="Automatically buy every day, every week, or every month" Icon={faHistory} />
                                    <TradeModalOption title="Limit orders" description="Place a buy or sell order at a price you set" Icon={faTags} last={true} />

                                </View>
                            </TouchableWithoutFeedback>


                            <TouchableWithoutFeedback onPress={toggleOverlay}>
                                <View style={[styles.modal, styles.closeModal]}>
                                    <Text>Cancel</Text>
                                </View>
                            </TouchableWithoutFeedback>

                        </View>
                    </TouchableWithoutFeedback>
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
    overlay: {
        // position: "absolute",
        // bottom: 30,
        width: windowWidth * 0.9,
        height: 200,
        position: "absolute",
        bottom: 50,
    },
    dominant: {
        position: "absolute",
        top: -200,
        zIndex: 1000,
        width: windowWidth,
        height: windowHeight + 200,
        //other potential colour scheme
        // backgroundColor: 'rgba(22, 43, 74, 0.8)', 
        backgroundColor: 'rgba(19, 43, 80, 0.7)',
        alignItems: "center",
    },
    modal: {
        position: "absolute",
        width: "90%",
        backgroundColor: "white",
        borderRadius: 5,
    },
    infoModal: {
        bottom: 165,
        height: 255,
    },
    closeModal: {
        bottom: 100,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});

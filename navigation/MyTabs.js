import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CardScreen from './../screens/CardScreen'
import SendScreen from './../screens/SendScreen'
// import SettingsScreen from './../screens/SettingsScreen'
import { faCog, faWallet, faCreditCard, faDollarSign, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import TradeButton from './../components/TradeButton'
import HomeStackScreen from './../StackScreens/HomeStackScreen'
import SettingsStackScreen from './../StackScreens/SettingsStackScreen'

const Tab = createBottomTabNavigator();

const MyTabs = ({ toggleOverlay }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let icon = null;
                    let iconColor = focused ? "dodgerblue" : "darkgray";

                    switch (route.name) {
                        case "HomeStack":
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
                        case "SettingsStack":
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
            <Tab.Screen name="HomeStack" component={HomeStackScreen} />
            <Tab.Screen name="Card" component={CardScreen} />
            <Tab.Screen name="Trade" component={HomeStackScreen} />
            <Tab.Screen name="Send" component={SendScreen} />
            <Tab.Screen name="SettingsStack" component={SettingsStackScreen} />
        </Tab.Navigator>
    )
}

export default MyTabs

const styles = StyleSheet.create({})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SettingsScreen from './../screens/SettingsScreen'
import HelpScreen from './../screens/HelpScreen'

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
            <SettingsStack.Screen
                name="Help"
                component={HelpScreen}
            />
        </SettingsStack.Navigator>
    )
}

export default SettingsStackScreen

const styles = StyleSheet.create({})

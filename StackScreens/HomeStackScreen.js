import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './../screens/HomeScreen'
import CurrencyHistory from './../screens/CurrencyHistory'

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="Currency History" component={CurrencyHistory} />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen

const styles = StyleSheet.create({})

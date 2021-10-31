import React from 'react'
import { StyleSheet, } from 'react-native'
import { ModalProvider } from './contexts/ModalProvider'
import { UserProvider } from './contexts/UserProvider'
import Index from './Index'

export default function App() {
    return (
        <UserProvider>
            <ModalProvider>
                <Index />
            </ModalProvider>
        </UserProvider>
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

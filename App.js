import React from 'react'
import { StyleSheet, } from 'react-native'
import { ModalProvider } from './contexts/ModalProvider'
import Index from './Index'

export default function App() {
    return (
        <ModalProvider>
            <Index />
        </ModalProvider>
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

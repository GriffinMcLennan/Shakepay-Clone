import React from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard, ScrollView, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import GradientButton from './GradientButton'

const Test = () => {
    return (
        // <ScrollView style={styles.scrollView}>
        //     <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
        //         <TextInput
        //             placeholder="Username"
        //             marginTop={50}
        //         />
        //         <GradientButton text="Sign up" height="100%" justifyContent="flex-end" />
        //     </Pressable>
        // </ScrollView>
        <KeyboardAvoidingView
            style={styles.main}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
                    <Text style={styles.text}>Log into Shakepay</Text>
                    <TextInput placeholder="Username" marginTop={20} />
                    <View style={styles.bottom}>
                        <GradientButton text="Sign up" />
                    </View>
                </Pressable>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Test

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%",
        backgroundColor: "white",
    },
    container: {
        flex: 1,
        height: "100%",
    },
    bottom: {
        flex: 1,
        justifyContent: "flex-end",
    }
})

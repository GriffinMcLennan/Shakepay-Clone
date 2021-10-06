import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'

const HeaderLeft = () => {
    const navigation = useNavigation();

    return (
        <Pressable style={styles.container} onPress={() => navigation.pop()}>
            <FontAwesomeIcon icon={faChevronLeft} size={20} />
        </Pressable>
    )
}

export default HeaderLeft

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        marginLeft: 5,
    }
})

import React from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import { useModalContext } from './../contexts/ModalProvider'

const ICON_SIZE = 24;

const TradeModalOption = ({ title, description, Icon, last, link, SVG, ImageSrc }) => {
    const navigation = useNavigation();
    const { toggleTradeModalVisible } = useModalContext();

    return (
        <Pressable onPress={() => {
            navigation.navigate(link);
            toggleTradeModalVisible();
        }}>
            <View style={[styles.bottom, last && { borderBottomWidth: 0 }]} >
                <View style={styles.container}>
                    {Icon && <FontAwesomeIcon icon={Icon} size={ICON_SIZE} color={"dodgerblue"} />}
                    {SVG && <SVG height={35} width={35} />}
                    {ImageSrc && <Image style={{ height: 35, width: 35 }} source={ImageSrc} />}
                    <View style={styles.info}>
                        <Text style={styles.titleFont}>{title}</Text>
                        {description && <Text style={styles.descriptionFont}>{description}</Text>}
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default TradeModalOption

const styles = StyleSheet.create({
    bottom: {
        borderBottomWidth: 1,
        borderColor: "gainsboro",
    },
    container: {
        flexDirection: "row",
        padding: 10,
        marginRight: 30,
        marginTop: 10,
        alignItems: "center",
    },
    info: {
        display: "flex",
        marginLeft: 20,
    },
    titleFont: {
        fontSize: 16,
        fontWeight: "500",
    },
    descriptionFont: {
        fontSize: 14,
        marginTop: 7,
        color: "dimgray",
    }
})

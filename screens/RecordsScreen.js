import React from 'react'
import { StyleSheet, ImageBackground, View } from 'react-native'
import { ListItem } from 'react-native-elements/dist/list/ListItem';

const RecordsScreen = () => {


    return (
        <ImageBackground
            source={require("../assets/images/embers.gif")}
            style={{ flex: 1, resizeMode: "cover" }}
        >
            <View style={styles.container}>
               
            </View>
        </ImageBackground >
    )
}

export default RecordsScreen

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

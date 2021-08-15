import React from 'react'
import { View, StyleSheet, Image, ImageBackground, Text } from 'react-native'
import { useFonts, EBGaramond_500Medium } from "@expo-google-fonts/eb-garamond";
import { Button } from 'react-native-elements';


const BonfireScreen = () => {
    let [fontsLoaded] = useFonts({
        EBGaramond_500Medium,
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <ImageBackground
            source={require("../assets/images/embers.gif")}
            style={{ flex: 1, resizeMode: "cover", alignItems: "center", justifyContent: 'center', padding: 0 }}
        >
            <View style={styles.textView}>
                <Text style={styles.text}>If you require rest, now is the time. That is, after all, what the bonfire is for.</Text>
            </View>
            <View style={styles.imageView}>
                <Image source={require('../assets/images/bonfire-bg2.gif')} style={styles.image} />
            </View>
            <View style={styles.buttonView}>
                <Button buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle} title="Don't you dare go hallow." />
            </View>
        </ImageBackground>
    )
}

export default BonfireScreen

const styles = StyleSheet.create({
    textView:
    {
        top: 30,
        position: 'absolute',
        textAlign: 'center',
        padding: 20
    },
    text:
    {
        fontFamily: 'EBGaramond_500Medium',
        color: '#FFF',
        fontSize: 30,
    },
    imageView:
    {
        padding: 20,
        bottom: 50,
        position: 'absolute',
    },
    image:
    {
        width: 300,
        height: 500,
    },
    buttonView:
    {
        bottom: 50,
        position: 'absolute',
    },
    buttonStyle:
    {
        margin: 5,
        backgroundColor: '#C27200',
        width: 250,
    },
    titleStyle:
    {
        fontFamily: 'EBGaramond_500Medium',
        fontSize: 20,
    },
})

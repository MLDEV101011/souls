import React from "react";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {EBGaramond_500Medium, useFonts} from "@expo-google-fonts/eb-garamond";
import {Divider, Input} from "react-native-elements";
import {Chip} from "react-native-paper";
import userClass from "../components/UserClasses";


const PlayerScreen = ({navigation}) => {

    let [fontsLoaded] = useFonts({
        EBGaramond_500Medium,
    });

    if (!fontsLoaded) {
        return null;
    }
    return (

        <ImageBackground
            source={require("../assets/images/embers.gif")}
            style={{
                flex: 1,
                resizeMode: "cover",
            }}

        >
            <View style={styles.container}>
                <View style={styles.row1}>
                    <Text style={styles.smallTitleText}>Ashen Souls</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={styles.titleText}>Create Character</Text>
                    <Divider style={{backgroundColor: '#FFF'}}/>
                </View>
                <View style={styles.characterInputView}>
                    <View style={styles.characterRow}>
                        <Text style={styles.text}>Name:</Text>
                        <Input containerStyle={styles.textInput}/>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default PlayerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    smallTitleText: {
        fontSize: 15,
        color: '#FFF',
        fontFamily: 'EBGaramond',
    },
    row2: {
        paddingTop: 20,
    },

    titleText: {
        color: '#FFF',
        fontSize: 30,
        fontFamily: 'EBGaramond',
    },
    characterInputView: {
        width: '100%',
        paddingTop: 30,

    },
    characterRow: {
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    text: {
        fontSize: 25,
        color: '#FFF',
        fontFamily: 'EBGaramond'
    },
    textInput: {
        width: '80%',
        fontSize: 25,
    },
    inputBox: {}
});

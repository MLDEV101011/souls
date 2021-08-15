import React, { useState, useEffect } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { Button } from "react-native-elements";
import { useFonts, EBGaramond_500Medium } from "@expo-google-fonts/eb-garamond";

const HomeScreen = ({ navigation }) => {
  const [fadeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 7000,
      useNativeDriver: true
    }).start();
  }, []);

  let [fontsLoaded] = useFonts({
    EBGaramond_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ImageBackground
      source={require("../assets/images/firekeeper-bg.gif")}
      style={{ flex: 1, resizeMode: "cover", alignItems: "center" }}
    >
      <View style={styles.titleView}>
        <Animated.View style={{ opacity: fadeAnimation }}>
          <Text style={styles.titleText}>Ashen Souls</Text>
        </Animated.View>
      </View>
      <View style={styles.buttonView}>
        <Button
          type="outline"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitle}
          title="Awaken, Ashen One."
          onPress={()=>navigation.navigate('Quiz')}
        />
        <Button
          type="outline"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitle}
          title="Where have you been?"
          onPress={() => navigation.navigate('YouDied')}
        />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  titleView: {
    top: 30,
    position: "absolute",
    alignItems: "center",
    textAlign: "center",
  },
  titleText: {
    fontSize: 50,
    color: "#FFF",
    fontFamily: "EBGaramond_500Medium",
  },
  buttonView: {
    bottom: 30,
    position: "absolute",
  },
  buttonStyle: {
    borderColor: "#FFF",
    margin: 10,
    width: 200,
  },
  buttonTitle: {
    fontFamily: "EBGaramond_500Medium",
    color: "#FFF",
    fontSize: 20,
  },
});

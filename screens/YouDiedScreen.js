import React, { useState, useEffect } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useFonts, EBGaramond_500Medium } from "@expo-google-fonts/eb-garamond";
import { Button } from "react-native-elements";

const YouDiedScreen = ({ navigation }) => {
  const [fadeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 7000,
      useNativeDriver: true,
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
      source={require("../assets/images/embers.gif")}
      style={{ flex: 1, resizeMode: "cover", alignItems: "center" }}
    >
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Animated.View style={{ opacity: fadeAnimation }}>
            <Text style={styles.titleText}>You Died</Text>
          </Animated.View>
        </View>
      </View>
      <Button
        type="outline"
        title="Soon… I will be consumed… by them, by the Dark."
        onPress={() => navigation.navigate("Home")}
        style={{marginBottom:30}}
        titleStyle={{
          color: "#FFF",
          fontSize: 15,
          fontFamily: "EBGaramond_500Medium",
        }}
        buttonStyle={{ borderColor: "#FFF" }}
      />
    </ImageBackground>
  );
};

export default YouDiedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleView: {
    alignItems: "center",
  },
  titleText: {
    fontSize: 95,
    color: "#8a0303",
    fontFamily: "EBGaramond_500Medium",
  },
});

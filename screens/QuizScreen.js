import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { useFonts, EBGaramond_500Medium } from "@expo-google-fonts/eb-garamond";
import questions from "../components/Questions";
import { TouchableOpacity } from "react-native-gesture-handler";

const QuizScreen = ({ navigation }) => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(randomIndex);
  const question = questions[activeQuestionIndex];
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    if(timer == 0) {
      clearInterval(interval);
      navigation.navigate("YouDied")
    }
    if (score == 15) {
      clearInterval(interval);
      navigation.navigate("Bonfire")
    }
    if (score == 40) {
      clearInterval(interval);
      navigation.navigate("Bonfire")
    }
    return () => clearInterval(interval);
  }, [timer]);

  

  const answerQ = (correct) => {
    if (correct) {
      setScore(score + 1);
      setActiveQuestionIndex(randomIndex);
      setTimer(10);
    } else {
      navigation.navigate("YouDied");
    }
  };

  let [fontsLoaded] = useFonts({
    EBGaramond_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ImageBackground
      source={require("../assets/images/embers.gif")}
      style={{ flex: 1, resizeMode: "cover" }}
    >
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Ashen Souls</Text>
        </View>

        <View style={styles.utilsView}>
          <View style={styles.soulLvlView}>
            <Text style={styles.soulLvlCount}>{score}</Text>
          </View>
          <View>
            <Image
              source={require("../assets/images/dark-sigil.gif")}
              style={{ width: 150, height: 150, padding: 0 }}
            />
          </View>
          <View style={styles.timerView}>
            <Text style={styles.timerNum}>{timer}</Text>
          </View>
        </View>

        <View style={styles.questionView}>
          <Text style={styles.questionText}>{question.question}</Text>
        </View>

        <View style={styles.answerView}>
          {question.answers.map((answer, index) => (
            <TouchableOpacity key={index} style={styles.answerButton} onPress={() => answerQ(answer.correct)}>
              <Text style={styles.answerText}>{answer.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  titleView: {
    top: 20,
    position: "absolute",
    flexDirection: "row",
  },
  titleText: {
    flexDirection: "row",
    padding: 10,
    color: "#FFF",
    fontSize: 20,
    textDecorationLine: "underline",
    fontFamily: "EBGaramond_500Medium",
  },
  utilsView: {
    top: 75,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  soulLvlView: {
    marginRight: 40,
  },
  soulLvlCount: {
    color: "#FFF",
    fontSize: 60,
    fontFamily: "EBGaramond_500Medium",
  },
  soulLvlText: {
    color: "#FFF",
    fontSize: 15,
  },
  imageView: {},
  timerView: {
    marginLeft: 20,
  },
  timerNum: {
    color: "white",
    fontSize: 60,
    fontFamily: "EBGaramond_500Medium",
  },
  timerText: {
    color: "#FFF",
    fontSize: 15,
  },
  questionView: {
    padding: 10,
    justifyContent: "center",
    borderBottomColor: "#FFF",
    borderTopColor: "#FFF",
    borderWidth: 2,
    textAlign: "center",
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
  questionText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 35,
    fontFamily: "EBGaramond_500Medium",
  },
  answerView: {
    alignItems: "center",
    width: "100%",
    bottom: 0,
    position: "absolute",
    padding: 20,
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 0,
  },
  answerButton: {
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    backgroundColor: "#C27200",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFF",
  },

  answerText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "EBGaramond_500Medium",
  },

  titleStyle: {
    fontFamily: "EBGaramond_500Medium",
    fontSize: 20,
    color: "#FFF",
  },
});

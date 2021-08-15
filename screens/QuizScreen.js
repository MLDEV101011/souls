import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts, EBGaramond_500Medium,  } from "@expo-google-fonts/eb-garamond";
import questions from '../components/Questions';
import { Button } from 'react-native-elements';
import { Image } from "react-native";

const QuizScreen = ({ navigation }) => {

  const [timerCount, setTimerCount] = useState(3)
  const [timerColor, setTimerColor] = useState('#FFF')
  const [soulCount, setSoulCount] = useState(1);

  const randQ = Math.floor(Math.random() * questions.length)
  const question = questions.map(q=>q.question);
  const randomQ = question[randQ];
  const answer = questions.map(a => a.answers)

  
  const handleTimerColor = () => {
    if(timerCount === 3){
      setTimerColor('red');
    }
  }

  const handleAnswer = () => {
    
  }

  console.log(qList)

 
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
            <Text style={styles.soulLvlCount}>{soulCount}</Text>
          </View>
          <View>
            <Image source={require('../assets/images/dark-sigil.gif')} style={{width: 150, height: 150, padding: 0}}/>
          </View>
          <View style={styles.timerView}>
            <Text style={styles.timerNum}>{timerCount}</Text>
          </View>
        </View>

        <View style={styles.questionView}>
          <Text style={styles.questionText}>{randomQ}</Text>
        </View>

        <View style={styles.answerView}>
          <Button onPress={handleAnswer} title={answer} buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle} />
          <Button onPress={handleAnswer} title={answer} buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle} />
          <Button onPress={handleAnswer} title={answer} buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle} />
          <Button onPress={handleAnswer} title={answer} buttonStyle={styles.buttonStyle} titleStyle={styles.titleStyle} />
        </View>

      </View>
    </ImageBackground >
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  titleView:
  {
    top: 20,
    position: 'absolute',
    flexDirection: 'row',
  },
  titleText:
  {
    flexDirection: 'row',
    padding: 10,
    color: "#FFF",
    fontSize: 20,
    textDecorationLine: "underline",
    fontFamily: 'EBGaramond_500Medium',
  },
  utilsView:
  {
    top: 75,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  soulLvlView:
  {
    marginRight: 40
  },
  soulLvlCount: 
  {
    color: '#FFF',
    fontSize: 60,
    fontFamily: 'EBGaramond_500Medium',
  },
  soulLvlText: 
  {
    color: '#FFF',
    fontSize: 15,
  },
  imageView:
  {
   
  },
  timerView:
  {
    marginLeft: 20
  },
  timerNum:
  {
    color: 'white',
    fontSize: 60,
    fontFamily: 'EBGaramond_500Medium',
  },
  timerText: 
  {
    color: '#FFF',
    fontSize: 15,
  },
  questionView:
  {
    padding: 10,
    justifyContent: 'center',
    borderBottomColor: '#FFF',
    borderTopColor: '#FFF',
    borderWidth: 2,
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 60,
  },
  questionText:
  {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'EBGaramond_500Medium',
  },
  answerView:
  {
    bottom: 0,
    position: 'absolute',
    padding: 20,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
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

});

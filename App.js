import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import screens
import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";
import PlayerScreen from "./screens/PlayerScreen";
import RecordsScreen from './screens/RecordsScreen';
import YouDiedScreen from './screens/YouDiedScreen';
import BonfireScreen from './screens/BonfireScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Player" component={PlayerScreen} />
        <Stack.Screen name="Records" component={RecordsScreen} />
        <Stack.Screen name="YouDied" component={YouDiedScreen} />
        <Stack.Screen name="Bonfire" component={BonfireScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

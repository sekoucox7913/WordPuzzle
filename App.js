import React, { useState, useEffect } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Audio } from "expo-av";
import { AsyncStorage } from 'react-native';

import MainMenu from "./pages/MainPage";
import LevelPage from "./pages/LevelPage";
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import Level3 from "./pages/Level3";

export const Context1 = React.createContext(null);

const Stack = createNativeStackNavigator();
const STORAGE_KEY = "@save_game_state";

function App() {
  const context1InitialState = {
    sound: {
      player: null,
      palaying: false,
    },
    level: 1,
  };
  const [gameState, setGameState] = useState(context1InitialState);

  async function playSound() {
    if (gameState.sound.player) {
      await gameState.sound.player.playAsync();
      const newState = {
        ...gameState,
        sound: {
          ...gameState.sound,
          palaying: true,
        },
      };
      setGameState(newState);
      console.log("Playing Sound one");
    } else {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(
        require("./assets/music/Menu-Game.mp3")
      );
      await sound.setIsLoopingAsync(true);
      await sound.playAsync();
      const newState = {
        ...gameState,
        sound: {
          ...gameState.sound,
          player: sound,
          palaying: true,
        },
      };
      setGameState(newState);
      console.log("Playing Sound initial");
    }
  }
  async function stopSound() {
    if (gameState.sound.player) {
      await gameState.sound.player.stopAsync();
      const newState = {
        ...gameState,
        sound: {
          ...gameState.sound,
          palaying: false,
        },
      };
      setGameState(newState);
      console.log("Stop Sound");
    }
  }
  function setLevel(level) {
    const newState = {
      ...gameState,
      level,
    };
    setGameState(newState);
    console.log("level set to ", level);
  }

  const context1Setters = {
    playSound,
    stopSound,
    setLevel,
  };

  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        `${data.level},${data.sound.palaying ? 1 : 0}`
      );
      console.og("Data successfully saved");
    } catch (e) {
      console.log("Failed to save the data to the storage");
    }
  };

  const readData = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      console.log("data 2", data);
      const data2 = data.split(",");
      if (data !== null) {
        setGameState({
          ...gameState,
          sound: {
            ...gameState.sound,
            palaying: data2[1] == "1" ? true : false,
          },
          level: Number(data2[0]),
        });
      }
    } catch (e) {
      console.log("Failed to fetch the data from storage");
    }
  };

  useEffect(() => {
    readData();
    playSound();
  }, []);
  useEffect(() => {
    console.log("gameState", gameState);
    saveData(gameState);
    console.log("data saved");
  }, [gameState]);

  return (
    <Context1.Provider value={{ ...gameState, ...context1Setters }}>
      <NavigationContainer
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="main"
            component={MainMenu}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="level"
            component={LevelPage}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="level1"
            component={Level1}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="level2"
            component={Level2}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="level3"
            component={Level3}
            options={{ header: () => null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context1.Provider>
  );
}
export default App;

import React, { useContext } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";
import { Context1 } from "../App";

export default function MainMenu({ navigation }) {
  const context = useContext(Context1);

  const onClickSound = () => {
    if (context.sound.palaying) {
      context.stopSound();
    } else {
      context.playSound();
    }
  };

  /* const [sound, setSound] = React.useState();
  const [playSound, setPlaySound] = React.useState(true); */

  /* async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/music/Menu-Game.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.setIsLoopingAsync(true);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]); */
  /* const componentWillMount = async () => {
    this.backgroundMusic = new Audio.Sound();
    try {
      await this.backgroundMusic.loadAsync(
        require("../assets/music/Menu-Game.mp3")
      );
      await this.backgroundMusic.setIsLoopingAsync(true);
      await this.backgroundMusic.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }; */
  return (
    <View style={styles.MainMenu}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <View
        style={{
          //position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("level1", { level: "1" })}
        >
          <View style={styles.Group11}>
            <Image
              style={styles.Vector1}
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea0e/ac9d/5ec8ef74377ec021d151708852d351e0"
              }}
            />
          </View>
        </TouchableOpacity>
      </View> */}
        <View style={styles.Group979}>
          <TouchableOpacity onPress={onClickSound}>
            <View style={styles.Group13}>
              <Text
                style={{
                  marginRight: -40,
                  zIndex: 100,
                  fontSize: 25,
                  fontFamily: "Solway, serif",
                  fontWeight: "700",
                  color: "#FE843F",
                  opacity: context.sound.palaying ? 1 : 0.5,
                }}
              >
                Sound
              </Text>
              <Image
                style={{
                  width: 155,
                  height: 56,
                  opacity: context.sound.palaying ? 1 : 0.5,
                }}
                source={require("../assets/image1.png")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("level", { level: 3 })}
          >
            <View style={styles.Group14}>
              <Text style={styles.Txt252}>Levels</Text>

              <Image
                style={styles.Rectangle21}
                source={require("../assets/image1.png")}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.PlayBottonWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate("level1", { level: "1" })}
            >
              <View style={styles.Group11}>
                <Image
                  style={styles.Vector1}
                  source={require("../assets/image2.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Image
            style={styles.Group}
            source={require("../assets/image3.png")}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  MainMenu: {
    flex: 1,
  },
  PlayBottonWrapper: {
    marginTop: "30%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 35,
  },
  Group979: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    flex: 1,
    marginTop: "10%",
    marginRight: -70,
  },
  Group13: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  Txt861: {
    marginRight: -40,
    zIndex: 100,
    fontSize: 25,
    fontFamily: "Solway, serif",
    fontWeight: "700",
    color: "#FE843F",
  },
  Rectangle2: {
    width: 155,
    height: 56,
    opacity: 1,
  },
  Group14: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    //marginBottom: "65%"
  },
  Txt252: {
    marginRight: -40,
    zIndex: 100,
    fontSize: 25,
    fontFamily: "Solway, serif",
    fontWeight: "700",
    color: "#FE843F",
    textAlign: "right",
    justifyContent: "flex-end",
  },
  Rectangle21: {
    width: 155,
    height: 56,
    opacity: 1,
  },
  Group: {
    width: 257.19,
    height: 372.91,
    marginTop: "auto",
    marginBottom: -120,
  },
  Group11: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 59.5,
    backgroundColor: "rgba(254,132,63,1)",
    width: 119,
    height: 119,
  },
  Vector1: {
    width: 34,
    height: 55,
  },
});

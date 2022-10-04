import React, { useContext } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Context1 } from "../App";

export default function Level({ navigation, route }) {
  const context = useContext(Context1);

  return (
    <View style={styles.Level}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("main")}>
          <Image
            style={styles.Group20}
            source={require("../assets/image4.png")}
          />
        </TouchableOpacity>
        <View
          style={{
            marginTop: "30%",
            //position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.Group746}>
            <Text style={styles.Txt212}>Choose level</Text>
            <View style={styles.Group653}>
              <TouchableOpacity onPress={() => navigation.navigate("level1")}>
                <View style={styles.Group19}>
                  <Text style={styles.Txt934}>1</Text>
                </View>
              </TouchableOpacity>

              {context.level >= 2 ? (
                <TouchableOpacity onPress={() => navigation.navigate("level2")}>
                  <View style={styles.Group19}>
                    <Text style={styles.Txt934}>2</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View style={styles.Group16}>
                  <Image
                    style={styles.Subtract}
                    source={require("../assets/image5.png")}
                  />
                </View>
              )}

              {context.level >= 3 ? (
                <TouchableOpacity onPress={() => navigation.navigate("level3")}>
                  <View style={styles.Group19}>
                    <Text style={styles.Txt934}>3</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View style={styles.Group17}>
                  <Image
                    style={styles.Subtract1}
                    source={require("../assets/image5.png")}
                  />
                </View>
              )}
            </View>
            <View style={styles.Group18}>
              <Image
                style={styles.Subtract2}
                source={require("../assets/image5.png")}
              />
            </View>
            <Text style={styles.Txt194}>being planned</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Level: {
    flex: 1,
  },
  Group20: {
    marginTop: "10%",
    width: 155,
    height: 56,
    alignSelf: "flex-start",
    marginLeft: -70,
  },
  Group746: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Txt212: {
    fontSize: 25,
    fontFamily: "Solway, serif",
    fontWeight: "700",
    color: "rgba(254,132,63,1)",
    marginBottom: 33,
  },
  Group653: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 30,
  },
  Group19: {
    paddingTop: 26,
    paddingBottom: 25,
    paddingLeft: 36,
    paddingRight: 35,
    marginRight: 17,
    backgroundColor: "rgba(57,94,132,1)",
    width: 83,
    height: 83,
  },
  Txt934: {
    fontSize: 25,
    fontFamily: "Solway, serif",
    fontWeight: "700",
    color: "rgba(254,132,63,1)",
  },

  Group16: {
    paddingTop: 24.55,
    paddingBottom: 24.55,
    paddingLeft: 28,
    paddingRight: 27,
    marginRight: 17,
    backgroundColor: "rgba(151,151,151,1)",
    width: 83,
    height: 83,
  },
  Subtract: {
    width: 26,
    height: 31.91,
  },

  Group17: {
    paddingTop: 24.55,
    paddingBottom: 24.55,
    paddingLeft: 28,
    paddingRight: 27,
    backgroundColor: "rgba(151,151,151,1)",
    width: 83,
    height: 83,
  },
  Subtract1: {
    width: 26,
    height: 31.91,
  },

  Group18: {
    paddingTop: 24.55,
    paddingBottom: 24.55,
    paddingLeft: 28,
    paddingRight: 27,
    marginBottom: 7,
    backgroundColor: "rgba(151,151,151,1)",
    width: 83,
    height: 83,
  },
  Subtract2: {
    width: 26,
    height: 31.91,
  },

  Txt194: {
    fontSize: 16,
    fontFamily: "Solway, serif",
    fontWeight: "500",
    color: "rgba(120,120,120,1)",
  },
});

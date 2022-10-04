import React, { useState, useContext } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { checkArrayIncludes } from "../utils";
import { Context1 } from "../App";
const level1 = [
  "bpaintball",
  "aglacrosse",
  "dymnasticm",
  "mptalorese",
  "ienthnefgd",
  "ntonnirena",
  "cnrunngeil",
  "hopooldrlt",
  "aicoachaes",
  "mpsnowborw",
];
const level1Answers = [
  "badminton",
  "champion",
  "paintball",
  "snowboard",
  "wrestling",
  "coach",
  "gymnastics",
  "lacrosse",
  "medal",
  "pentathlon",
  "referee",
  "running",
  "pool",
];
const colors = [
  "#ff3d00",
  "#8d6e63",
  "#bdbdbd",
  "#ffff00",
  "#ffab40",
  "#69f0ae",
  "#00e676",
  "#eeff41",
  "#4caf50",
  "#cddc39",
  "#039be5",
  "#512da8",
  "#592d68",
];
const totalInnerLevels = 13;

const initCurrentState2 = {
  1: {
    current: false,
  },
  2: {
    current: false,
  },
  3: {
    current: false,
  },
  4: {
    current: false,
  },
  5: {
    current: false,
  },
  6: {
    current: false,
  },
  7: {
    current: false,
  },
  8: {
    current: false,
  },
  9: {
    current: false,
  },
  10: {
    current: false,
  },
  11: {
    current: false,
  },
  12: {
    current: false,
  },
  13: {
    current: false,
  },
  14: {
    current: false,
  },
  15: {
    current: false,
  },
  16: {
    current: false,
  },
  17: {
    current: false,
  },
  18: {
    current: false,
  },
  19: {
    current: false,
  },
  20: {
    current: false,
  },
  21: {
    current: false,
  },
  22: {
    current: false,
  },
  23: {
    current: false,
  },
  24: {
    current: false,
  },
  25: {
    current: false,
  },
  26: {
    current: false,
  },
  27: {
    current: false,
  },
  28: {
    current: false,
  },
  29: {
    current: false,
  },
  30: {
    current: false,
  },
  31: {
    current: false,
  },
  32: {
    current: false,
  },
  33: {
    current: false,
  },
  34: {
    current: false,
  },
  35: {
    current: false,
  },
  36: {
    current: false,
  },
  37: {
    current: false,
  },
  38: {
    current: false,
  },
  39: {
    current: false,
  },
  40: {
    current: false,
  },
  41: {
    current: false,
  },
  42: {
    current: false,
  },
  43: {
    current: false,
  },
  44: {
    current: false,
  },
  45: {
    current: false,
  },
  46: {
    current: false,
  },
  47: {
    current: false,
  },
  48: {
    current: false,
  },
  49: {
    current: false,
  },
  50: {
    current: false,
  },
  51: {
    current: false,
  },
  52: {
    current: false,
  },
  53: {
    current: false,
  },
  54: {
    current: false,
  },
  55: {
    current: false,
  },
  56: {
    current: false,
  },
  57: {
    current: false,
  },
  58: {
    current: false,
  },
  59: {
    current: false,
  },
  60: {
    current: false,
  },
  61: {
    current: false,
  },
  62: {
    current: false,
  },
  63: {
    current: false,
  },
  64: {
    current: false,
  },
  65: {
    current: false,
  },
  66: {
    current: false,
  },
  67: {
    current: false,
  },
  68: {
    current: false,
  },
  69: {
    current: false,
  },
  70: {
    current: false,
  },
  71: {
    current: false,
  },
  72: {
    current: false,
  },
  73: {
    current: false,
  },
  74: {
    current: false,
  },
  75: {
    current: false,
  },
  76: {
    current: false,
  },
  77: {
    current: false,
  },
  78: {
    current: false,
  },
  79: {
    current: false,
  },
  80: {
    current: false,
  },
  81: {
    current: false,
  },
  82: {
    current: false,
  },
  83: {
    current: false,
  },
  84: {
    current: false,
  },
  85: {
    current: false,
  },
  86: {
    current: false,
  },
  87: {
    current: false,
  },
  88: {
    current: false,
  },
  89: {
    current: false,
  },
  90: {
    current: false,
  },
  91: {
    current: false,
  },
  92: {
    current: false,
  },
  93: {
    current: false,
  },
  94: {
    current: false,
  },
  95: {
    current: false,
  },
  96: {
    current: false,
  },
  97: {
    current: false,
  },
  98: {
    current: false,
  },
  99: {
    current: false,
  },
  100: {
    current: false,
  },
};
const initState = {
  1: {
    selecte: false,
  },
  2: {
    selecte: false,
  },
  3: {
    selecte: false,
  },
  4: {
    selecte: false,
  },
  5: {
    selecte: false,
  },
  6: {
    selecte: false,
  },
  7: {
    selecte: false,
  },
  8: {
    selecte: false,
  },
  9: {
    selecte: false,
  },
  10: {
    selecte: false,
  },
  11: {
    selecte: false,
  },
  12: {
    selecte: false,
  },
  13: {
    selecte: false,
  },
  14: {
    selecte: false,
  },
  15: {
    selecte: false,
  },
  16: {
    selecte: false,
  },
  17: {
    selecte: false,
  },
  18: {
    selecte: false,
  },
  19: {
    selecte: false,
  },
  20: {
    selecte: false,
  },
  21: {
    selecte: false,
  },
  22: {
    selecte: false,
  },
  23: {
    selecte: false,
  },
  24: {
    selecte: false,
  },
  25: {
    selecte: false,
  },
  26: {
    selecte: false,
  },
  27: {
    selecte: false,
  },
  28: {
    selecte: false,
  },
  29: {
    selecte: false,
  },
  30: {
    selecte: false,
  },
  31: {
    selecte: false,
  },
  32: {
    selecte: false,
  },
  33: {
    selecte: false,
  },
  34: {
    selecte: false,
  },
  35: {
    selecte: false,
  },
  36: {
    selecte: false,
  },
  37: {
    selecte: false,
  },
  38: {
    selecte: false,
  },
  39: {
    selecte: false,
  },
  40: {
    selecte: false,
  },
  41: {
    selecte: false,
  },
  42: {
    selecte: false,
  },
  43: {
    selecte: false,
  },
  44: {
    selecte: false,
  },
  45: {
    selecte: false,
  },
  46: {
    selecte: false,
  },
  47: {
    selecte: false,
  },
  48: {
    selecte: false,
  },
  49: {
    selecte: false,
  },
  50: {
    selecte: false,
  },
  51: {
    selecte: false,
  },
  52: {
    selecte: false,
  },
  53: {
    selecte: false,
  },
  54: {
    selecte: false,
  },
  55: {
    selecte: false,
  },
  56: {
    selecte: false,
  },
  57: {
    selecte: false,
  },
  58: {
    selecte: false,
  },
  59: {
    selecte: false,
  },
  60: {
    selecte: false,
  },
  61: {
    selecte: false,
  },
  62: {
    selecte: false,
  },
  63: {
    selecte: false,
  },
  64: {
    selecte: false,
  },
  65: {
    selecte: false,
  },
  66: {
    selecte: false,
  },
  67: {
    selecte: false,
  },
  68: {
    selecte: false,
  },
  69: {
    selecte: false,
  },
  70: {
    selecte: false,
  },
  71: {
    selecte: false,
  },
  72: {
    selecte: false,
  },
  73: {
    selecte: false,
  },
  74: {
    selecte: false,
  },
  75: {
    selecte: false,
  },
  76: {
    selecte: false,
  },
  77: {
    selecte: false,
  },
  78: {
    selecte: false,
  },
  79: {
    selecte: false,
  },
  80: {
    selecte: false,
  },
  81: {
    selecte: false,
  },
  82: {
    selecte: false,
  },
  83: {
    selecte: false,
  },
  84: {
    selecte: false,
  },
  85: {
    selecte: false,
  },
  86: {
    selecte: false,
  },
  87: {
    selecte: false,
  },
  88: {
    selecte: false,
  },
  89: {
    selecte: false,
  },
  90: {
    selecte: false,
  },
  91: {
    selecte: false,
  },
  92: {
    selecte: false,
  },
  93: {
    selecte: false,
  },
  94: {
    selecte: false,
  },
  95: {
    selecte: false,
  },
  96: {
    selecte: false,
  },
  97: {
    selecte: false,
  },
  98: {
    selecte: false,
  },
  99: {
    selecte: false,
  },
  100: {
    selecte: false,
  },
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const elementWidth = (windowWidth - 36 - 35 - 10) / 10;

var innerLevel = 0;
var selectedList = [];
var allSelectedList = [];

var previousValueX = -1;
var previousValueY = -1;


export default function Level({ navigation }) {
  const context = useContext(Context1);

  const [selected, setSelected] = useState(initState);
  const [currentSelected2, setCurrentSelected2] = useState(initCurrentState2);

  const [celebrating, setCelebrating] = useState(false);
  const [levelFinished, setLevelFinished] = useState(false);

  const valueAlreadySelected2 = (value) => {
    const result1 = checkArrayIncludes(value, selectedList);
    const result2 = checkArrayIncludes(value, allSelectedList);
    return result1 || result2;
  };

  const constractString = (selectedList) => {
    let result = "";
    selectedList.map((value) => {
      result = result + level1[Number(value[1])].charAt(value[0]);
    });
    return result;
  };

  const onItemClicked = (x, y, letters) => {
    setCelebrating(false);
    if (previousValueX >= 0) {
      const dX = x - previousValueX;
      const dY = y - previousValueY;
      const touchedValues = [];
      if (dX != 0) {
        if (dX >= 0) {
          Array.from(Array(dX + 1).keys()).map((value) => {
            if (value != 0) {
              touchedValues.push([previousValueX + value, previousValueY]);
            }
          });
        } else {
          Array.from(Array(-dX + 1).keys()).map((value) => {
            if (value != 0) {
              touchedValues.push([previousValueX - value, previousValueY]);
            }
          });
        }
      }

      if (dY != 0) {
        if (dY > 0) {
          Array.from(Array(dY + 1).keys()).map((value) => {
            if (value != 0) {
              touchedValues.push([x, previousValueY + value]);
            }
          });
        } else {
          Array.from(Array(-dY + 1).keys()).map((value) => {
            if (value != 0) {
              touchedValues.push([x, previousValueY - value]);
            }
          });
        }
      }

      let valid = true;
      touchedValues.map((value) => {
        if (valueAlreadySelected2(value)) {
          valid = false;
        }
      });

      if (valid) {
        let update = {};
        touchedValues.map((value) => {
          update = {
            ...update,
            [value[1] * 10 + value[0] + 1]: {
              current: true,
            },
          };
        });
        setCurrentSelected2({
          ...currentSelected2,
          ...update,
        });
        touchedValues.map((value) => {
          selectedList.push(value);
        });

        previousValueX = x;
        previousValueY = y;
      }
    } else {
      if (!valueAlreadySelected2([x, y])) {
        setCurrentSelected2({
          ...currentSelected2,
          [y * 10 + x + 1]: {
            current: true,
          },
        });
        selectedList.push([x, y]);
        previousValueX = x;
        previousValueY = y;
      }
    }
  };

  const onFinishSelecting = () => {
    const stringResult = constractString(selectedList);
    const answered = level1Answers.includes(stringResult);

    if (answered) {
      setCelebrating(true);
      innerLevel = innerLevel + 1;
      allSelectedList = [...allSelectedList, ...selectedList];

      let update = {};
      selectedList.map((value) => {
        update = {
          ...update,
          [value[1] * 10 + value[0] + 1]: {
            selecte: innerLevel,
          },
        };
      });

      setSelected({
        ...selected,
        ...update,
      });

      if (innerLevel === totalInnerLevels) {
        context.setLevel(2);
        setLevelFinished(true);
      }
    }

    previousValueX = -1;
    previousValueY = -1;
    selectedList = [];
    setCurrentSelected2(initCurrentState2);
  };

  return (
    <View style={styles.Level}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.gameWrapper}>
          <View style={styles.keyboardWrapper}>
            {celebrating ? (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <View style={styles.goodJobWrapper}>
                  <ImageBackground
                    source={require("../assets/image8.png")}
                    style={styles.GoodJobImage1}
                  >
                    <Image
                      style={styles.GoodJobImage2}
                      source={require("../assets/image7.png")}
                    />
                  </ImageBackground>
                </View>
                <Image
                  style={styles.GoodJobText}
                  source={require("../assets/image10.png")}
                />
              </View>
            ) : (
              <TouchableOpacity onPress={() => onFinishSelecting()}>
                <View style={styles.goodJobWrapper}>
                  <ImageBackground
                    source={require("../assets/image6.png")}
                    style={styles.GoodJobImage1}
                  ></ImageBackground>
                </View>
              </TouchableOpacity>
            )}
            <View style={styles.keyboardBackground}>
              <View style={styles.ColumnsWrapper}>
                {level1.map((value, y) => {
                  return (
                    <View style={styles.RowsWrapper}>
                      {value
                        .toString()
                        .split("")
                        .map((letters, x) => {
                          return (
                            <TouchableOpacity
                              onPress={() => onItemClicked(x, y, letters)}
                            >
                              <View
                                style={{
                                  paddingTop: 5,
                                  paddingBottom: 4,
                                  paddingLeft: 8,
                                  paddingRight: 7,
                                  marginRight: 1,
                                  backgroundColor: selected[y * 10 + x + 1]
                                    .selecte
                                    ? colors[selected[y * 10 + x + 1].selecte]
                                    : currentSelected2[y * 10 + x + 1].current
                                    ? "#FE843F"
                                    : "#FFFFFF",
                                  width: elementWidth,
                                  height: 30,
                                }}
                              >
                                <Text style={styles.ItemText}>{letters}</Text>
                              </View>
                            </TouchableOpacity>
                          );
                        })}
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.NextBackWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("main")}>
            <Image
              style={styles.Group20}
              source={require("../assets/image4.png")}
            />
          </TouchableOpacity>
          {levelFinished && (
            <TouchableOpacity onPress={() => navigation.navigate("level2")}>
              <Image
                style={styles.Group21}
                source={require("../assets/image9.png")}
              />
            </TouchableOpacity>
          )}
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
    width: 155,
    height: 56,
    alignSelf: "flex-end",
    marginLeft: -70,
  },
  Group21: {
    width: 155,
    height: 56,
    alignSelf: "flex-start",
    marginRight: -25,
  },
  NextBackWrapper: {
    marginTop: "10%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  gameWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  keyboardWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  goodJobWrapper: {
    marginBottom: -220,
  },
  GoodJobImage1: {
    paddingTop: 7.04,
    paddingBottom: 316.2,
    paddingLeft: 9.69,
    paddingRight: 153.85,
    width: 192.59,
    height: 356,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  GoodJobImage2: {
    width: 27.05,
    height: 30.76,
  },
  GoodJobText: {
    width: 54,
    height: 38,
    marginLeft: -50,
    zIndex: 100,
  },
  keyboardBackground: {
    paddingTop: 26,
    paddingBottom: 25,
    paddingLeft: 36,
    paddingRight: 35,
    marginBottom: 20,
    backgroundColor: "rgba(57,94,132,1)",
    width: "100%",
    height: "auto",
  },
  ColumnsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  RowsWrapper: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 1,
  },
  ItemBackground: {
    paddingTop: 5,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 7,
    marginRight: 1,
    backgroundColor: "#FFFFFF",
    width: elementWidth,
    height: 30,
  },
  ItemText: {
    fontSize: 16,
    fontFamily: "Solway, serif",
    fontWeight: "500",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
});

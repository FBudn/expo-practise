/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const Button = ({ navigation }: any) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <View style={styles.line} />
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        hitSlop={{ top: 30 }}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
      <Text style={styles.whiteText}>
        You can press button also in space under the line
      </Text>
      <Text style={styles.whiteText}>thanks to hitSlop</Text>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Go to Home component</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#75aefa",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: Platform.select({
      ios: 10,
      android: 55,
    }),
    width: 370,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  pressable: {
    alignItems: "center",
    marginTop: 100,
  },
  line: {
    width: "100%",
    borderBottomColor: "rgb(213, 202, 202)",
    borderBottomWidth: 2,
  },
  whiteText: {
    color: "hsl(0, 0%, 100%)",
  },
});

export default Button;

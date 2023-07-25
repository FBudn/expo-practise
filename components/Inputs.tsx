/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { StyledInput } from "./Styles";

const Inputs = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text>Go to Home component</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Button")}>
        <Text>Go to Button component</Text>
      </Pressable>
      <KeyboardAvoidingView style={styles.keyboadr} behavior="padding">
        <StyledInput />
        <StyledInput />
        <StyledInput />
        <StyledInput />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  keyboadr: {
    width: "100%",
    alignItems: "center",
    gap: 50,
  },
});

export default Inputs;

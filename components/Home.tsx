/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Home screen </Text>
      <Pressable onPress={() => navigation.navigate("Button")}>
        <Text>Go to Button component</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee5e5",
    alignItems: "center",
    justifyContent: "center",
    gap: 100,
  },
});

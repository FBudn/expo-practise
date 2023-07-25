/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { StyledText, StyledView } from "./Styles";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Home screen </Text>
      <StyledView color="red" border="2px" bg="red" padding={10}>
        <StyledText fontWeight="bold" color="white">
          Styled with styled-components and styled-system
        </StyledText>
      </StyledView>
      <Pressable onPress={() => navigation.navigate("Button")}>
        <Text>Go to Button component</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Inputs")}>
        <Text>Go to Inputs component</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("FlatListComponent")}>
        <Text>Go to FlatListComponent</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("WebViewComponent")}>
        <Text>Go to WebViewComponent</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
});

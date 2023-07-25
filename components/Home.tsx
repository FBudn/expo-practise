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

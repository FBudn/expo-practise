/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, FlatList, Text, Pressable, StyleSheet } from "react-native";

const listElements = [
  { name: "Element1", id: 1 },
  { name: "Element2", id: 2 },
  { name: "Element3", id: 3 },
  { name: "Element4", id: 4 },
];

const FlatListComponent = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item: any) => item.id}
        data={listElements}
        renderItem={({ item }) => (
          <Text style={styles.flatList}>{item.name}</Text>
        )}
      />
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text>Go to Home component</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  flatList: {
    fontWeight: "bold",
    margin: 10,
  },
});

export default FlatListComponent;

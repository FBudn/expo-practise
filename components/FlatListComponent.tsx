/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import React from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const listElements = [
  { name: "Element1", id: 1 },
  { name: "Element2", id: 2 },
  { name: "Element3", id: 3 },
  { name: "Element4", id: 4 },
  { name: "Element5", id: 5 },
  { name: "Element6", id: 6 },
  { name: "Element7", id: 7 },
  { name: "Element8", id: 8 },
  { name: "Element9", id: 9 },
  { name: "Element10", id: 10 },
  { name: "Element11", id: 11 },
  { name: "Element12", id: 12 },
  { name: "Element13", id: 13 },
  { name: "Element14", id: 14 },
  { name: "Element15", id: 15 },
  { name: "Element16", id: 16 },
  { name: "Element17", id: 17 },
  { name: "Element18", id: 18 },
  { name: "Element19", id: 19 },
  { name: "Element20", id: 20 },
  { name: "Element21", id: 21 },
  { name: "Element22", id: 22 },
  { name: "Element23", id: 23 },
  { name: "Element24", id: 24 },
];

const FlatListComponent = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        // numColumns={2}
        horizontal
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        data={listElements}
        renderItem={({ item }) => (
          <Text style={styles.flatList}>{item.name}</Text>
        )}
      />
      <Text>Scroll to the right</Text>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Go to Home component</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  flatList: {
    fontWeight: "bold",
    margin: 10,
  },
  touchable: {
    height: 60,
    padding: 20,
    borderRadius: 50,
    paddingBottom: 0,
    backgroundColor: "#ffff",
    alignContent: "center",
    justifyContent: "flex-end",
  },
});

export default FlatListComponent;

import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import Button from "./components/Button";
import Inputs from "./components/Inputs";
import FlatListComponent from "./components/FlatListComponent";
import WebViewComponent from "./components/WebViewComponent";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Button" component={Button} />
        <Stack.Screen name="Inputs" component={Inputs} />
        <Stack.Screen name="FlatListComponent" component={FlatListComponent} />
        <Stack.Screen name="WebViewComponent" component={WebViewComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

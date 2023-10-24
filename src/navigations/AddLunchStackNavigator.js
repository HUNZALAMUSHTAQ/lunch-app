import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddLunch from "../screens/AddLunch";
import DetailedLunch from "../screens/DetailedLunch";

const Stack = createNativeStackNavigator();

const LunchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddLunch"
        options={{ title: "Add Lunch", headerTitleAlign: "center" }}
        component={AddLunch}
      />
      <Stack.Screen
        name="DetailedLunch"
        options={{ title: "Detailed Lunch", headerTitleAlign: "center" }}
        component={DetailedLunch}
      />
    </Stack.Navigator>
  );
};

export default LunchStackNavigator;

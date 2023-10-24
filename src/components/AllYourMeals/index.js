import { View, Text, ScrollView } from "react-native";
import React from "react";
import LunchBox from "../LunchBox";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const AllYourMeals = () => {
  const navigation = useNavigation();
  
  const navigateToDetailedLunch = () => {
    navigation.navigate("MainLunch", {
      screen: "DetailedLunch",
      params: { lunchName: "Egg Salad" },
    });
  };

  return (
    <ScrollView>
      <View style={styles.stack}>
        <Text style={styles.main}>Breakfast</Text>
        <Text style={styles.sub}>2 meals | 230 calories</Text>
      </View>
      <LunchBox
        isMovable={false}
        lunchTitle="Egg Salad"
        onValueChange={navigateToDetailedLunch}
        lunchTime="09:00 am"
      />
      <LunchBox
        isMovable={false}
        lunchTitle="Egg Salad"
        onValueChange={navigateToDetailedLunch}
        lunchTime="09:00 am"
      />
      <View style={styles.stack}>
        <Text style={styles.main}>Lunch</Text>
        <Text style={styles.sub}>2 meals | 230 calories</Text>
      </View>
      <LunchBox
        isMovable={false}
        lunchTitle="Egg Salad"
        onValueChange={navigateToDetailedLunch}
        lunchTime="09:00 am"
      />
    </ScrollView>
  );
};

export default AllYourMeals;

import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import PlusIcon from "@app/assests/Tabs/Plus.svg";
import MinusIcon from "@app/assests/minus.png";
import { styles } from "./styles";

const AddQuantity = ({ mealCount, setMealCount, incrMeal, decrMeal }) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.button} onPress={decrMeal}>
        <Image source={MinusIcon} height={25} width={10} />
      </TouchableOpacity>

      <View style={styles.numView}>
        <Text style={styles.numText}>{mealCount}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={incrMeal}>
        <PlusIcon height={25} width={25} />
      </TouchableOpacity>
    </View>
  );
};

export default AddQuantity;

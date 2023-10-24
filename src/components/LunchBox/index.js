import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CoffeeIcon from "@app/assests/lunchitems/pancakes.svg";
import ArrowIcon from "@app/assests/arrowcircel.svg";

import Checkbox from "expo-checkbox";
import { styles } from "./styles";

const LunchBox = ({
  lunchTitle,
  lunchTime,
  icon: Icon,
  checked,
  onValueChange,
  idx,
  disabled,
  isMovable = true,
}) => {
  return (
    <TouchableOpacity style={styles.main} onPress={() => onValueChange(idx)}>
      <View style={styles.centeredRow}>
        <View style={styles.mainIcon}>
          <CoffeeIcon />
        </View>

        <View style={styles.textMain}>
          <Text style={styles.headingMain}>{lunchTitle}</Text>
          <Text style={styles.subHeading}>{lunchTime}</Text>
        </View>
      </View>
      {isMovable ? (
        <Checkbox
          style={styles.checkbox}
          value={checked}
          disabled={disabled}
          color={checked ? "#92A3FD" : undefined}
        />
      ) : (
        <ArrowIcon />
      )}
    </TouchableOpacity>
  );
};

export default LunchBox;

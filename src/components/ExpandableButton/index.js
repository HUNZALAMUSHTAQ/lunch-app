import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import PaperCup from "@app/assests/papercup.svg";
import Arrow from "@app/assests/arrow.svg";
import { styles } from "./styles";

const ExpandableButton = ({
  title,
  onPress,
  icon: Icon,
  secondary,
  secondaryTitle,
}) => {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <View style={styles.lunchMain}>
        {Icon && <Icon width={20} height={20} />}
        <Text style={styles.text}>{title}</Text>
      </View>

      <View style={styles.lunchMain}>
        {secondary && (
          <Text style={[styles.text, styles.secondaryText]}>
            {secondaryTitle}
          </Text>
        )}

        <Arrow height={20} width={20} />
      </View>
    </TouchableOpacity>
  );
};

export default ExpandableButton;

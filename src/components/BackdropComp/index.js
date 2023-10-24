import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Image } from "react-native";
import BackDropImage from "@app/assests/pancake.png";

const BackDropComp = () => {
  return (
    <View style={styles.main}>
      <View style={styles.circle}>
        <Image
          source={BackDropImage}
          style={styles.image}
          height={150}
          width={150}
        />
      </View>
    </View>
  );
};

export default BackDropComp;

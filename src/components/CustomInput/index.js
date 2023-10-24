import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";

const CustomInput = ({value, onChange}) => {
  return (
    <View style={styles.mainView}>
      <TextInput
        value={value}
        onChangeText={onChange}
  
        style={styles.main}
        placeholder="Search Lunch"
        placeholderTextColor="#ADA4A5"
      />
    </View>
  );
};

export default CustomInput;

import { TouchableOpacity } from "react-native";
import React from "react";
import PlusIcon from "@app/assests/Tabs/Plus.svg";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const AddLunchButton = () => {

  const navigation = useNavigation()
  const navigateToAddLunch = () =>{
    navigation.navigate("MainLunch", {screen: "AddLunch"})
  }
  
  return (
    <TouchableOpacity style={styles.main} onPress={navigateToAddLunch}>
      <PlusIcon height={40} width={40} />
    </TouchableOpacity>
  );
};

export default AddLunchButton;

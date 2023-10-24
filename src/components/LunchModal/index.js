import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CloseIcon from "@app/assests/xcross.svg";
import CustomInput from "../CustomInput";
import LunchBox from "../LunchBox";
import { LUNCH_DATA } from "./const";
import { styles } from "./styles";

const LunchModal = ({
  modalVisible,
  setModalVisible,
  setSelectedLunch,
  selectedLunch,
}) => {
  const [lunchData, setLunchData] = useState(LUNCH_DATA);
  const [query, setQuery] = useState();

  const onChangeQuery = (value) => {
    setQuery(value);
    const filteredData = LUNCH_DATA.filter((item) =>
      item.lunchTitle.toLowerCase().includes(value.toLowerCase())
    );
    setLunchData(value === "" ? LUNCH_DATA : filteredData);
  };

  const onCheckValueChanged = (idx) => {
    setLunchData((prevData) => {
      const updatedData = prevData.map((item, index) => {
        if (index === idx) {
          setSelectedLunch(item);
          return { ...item, checked: true };
        } else {
          return { ...item, checked: false };
        }
      });
      setModalVisible(false);
      return updatedData;
    });
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const modalOnRequestClose = () => {
    Alert.alert("Modal has been closed.");
    setModalVisible(!modalVisible);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={modalOnRequestClose}
      statusBarTranslucent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Select Lunch</Text>
          <View style={styles.closeStack}>
            <TouchableOpacity style={styles.closeMain} onPress={toggleModal}>
              <CloseIcon height={15} width={15} />
            </TouchableOpacity>
          </View>

          <CustomInput value={query} onChange={onChangeQuery} />

          <FlatList
            data={lunchData}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <LunchBox
                lunchTime={item.lunchTime}
                lunchTitle={item.lunchTitle}
                disabled={item.disabled}
                checked={item.checked}
                idx={index}
                onValueChange={onCheckValueChanged}
              />
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LunchModal;

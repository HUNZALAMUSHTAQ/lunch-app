import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import LunchModal from "../../components/LunchModal";
import ExpandableButton from "../../components/ExpandableButton";
import AddQuantity from "../../components/AddQuantity";

import PaperCup from "@app/assests/papercup.svg";
import CalenderIcon from "@app/assests/calender.svg";
import TimeIcon from "@app/assests/time.svg";
import { styles } from "./styles";

const AddLunch = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [mealCount, setMealCount] = useState(0);
  const [selectedLunch, setSelectedLunch] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  // MEAL Count
  const incrMeal = () => {
    setMealCount((prev) => prev + 1);
  };
  const decrMeal = () => {
    if (mealCount <= 0) {
      return null;
    }
    setMealCount((prev) => prev - 1);
  };

  // DATE
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  // Date End
  return (
    <View style={styles.main}>
      <Text style={styles.mainHeading}>Add Lunch in your schedule</Text>
      <ExpandableButton
        title="Select Lunch"
        icon={PaperCup}
        secondary={selectedLunch}
        secondaryTitle={selectedLunch.lunchTitle}
        onPress={() => setModalVisible(true)}
      />
      <ExpandableButton
        title="Select Date"
        onPress={showDatepicker}
        icon={CalenderIcon}
        secondary={true}
        secondaryTitle={date.toLocaleDateString()}
      />
      <ExpandableButton
        title="Select Time"
        onPress={showTimepicker}
        icon={TimeIcon}
        secondary={true}
        secondaryTitle={date.toLocaleTimeString()}
      />

      <AddQuantity
        mealCount={mealCount}
        setMealCount={setMealCount}
        decrMeal={decrMeal}
        incrMeal={incrMeal}
      />

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}
      <LunchModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        selectedLunch={selectedLunch}
        setSelectedLunch={setSelectedLunch}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Lunch</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddLunch;

import { View, Text } from "react-native";
import React, { useState } from "react";
import { Agenda } from "react-native-calendars";
import { styles } from "./styles";

const AgendaCalendar = () => {
  const [selectedDate, setSelectedData] = useState(new Date());

  return (
    <Agenda
      showClosingKnob={true}
      selected={selectedDate}
      scrollEnabled={true}
      hideKnob={false}
      pastScrollRange={5}
      futureScrollRange={5}
      horizontal={false}
      onDayPress={(day) => {
        console.log("Clicked day:", day.dateString);
      }}
      renderEmptyData={(props) => {
        return <View style={styles.emptyData}></View>;
      }}
    />
  );
};

export default AgendaCalendar;

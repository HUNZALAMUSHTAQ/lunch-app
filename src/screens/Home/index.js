import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Agenda, CalendarProvider } from "react-native-calendars";
import LunchBox from "../../components/LunchBox";
import PaperCup from "@app/assests/arrow.svg";
import AgendaCalendar from "../../components/AgendaCalender";
import { styles } from "./styles";
import AllYourMeals from "../../components/AllYourMeals";

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.agendaScreen}>
        <AgendaCalendar />
      </View>
      <View style={styles.mealScreen}>
        <AllYourMeals />
      </View>
    </View>
  );
};

export default HomeScreen;

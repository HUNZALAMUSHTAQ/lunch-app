import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "@app/assests/Tabs/Home.svg";
import HomeIconChecked from "@app/assests/Tabs/HomeChecked.svg";
import ProfileIcon from "@app/assests/Tabs/Profile.svg";
import ProfileIconChecked from "@app/assests/Tabs/ProfileChecked.svg";
import BottomDot from "@app/assests/Tabs/dot.svg";
import AddLunchButton from "../components/AddLunchButton";
import ProfileScreen from "../screens/Profile";
import HomeScreen from "../screens/Home";
import LunchStackNavigator from "./AddLunchStackNavigator";

const bottomTabsScreenOptions = {
  // headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: { height: 60 },
};

const bottomTabsDots = {
  tabBarShowLabel: true,
  tabBarLabel: ({ focused, color }) =>
    focused && (
      <View style={{ position: "relative", bottom: 8 }}>
        <BottomDot />
      </View>
    ),
};
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={bottomTabsScreenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...bottomTabsDots,
          tabBarIcon: ({ focused }) =>
            focused ? <HomeIconChecked /> : <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="MainLunch"
        component={LunchStackNavigator}
        
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          
          tabBarLabel: ({}) => {},
          tabBarIcon: () => <AddLunchButton />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: true,
          ...bottomTabsDots,
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileIconChecked /> : <ProfileIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

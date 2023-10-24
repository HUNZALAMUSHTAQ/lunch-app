import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BackDropComp from "../../components/BackdropComp";
import HeartIcon from "@app/assests/Heart.svg";
import { styles } from "./styles";

const DetailedLunch = ({ route }) => {
  const lunchName = route.params.lunchName;
  const bottomSheetRef = useRef();

  const snapPoints = useMemo(() => ["15%", "50%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backd
          backdropComponent={() => <BackDropComp />}
        >
          <View style={styles.contentContainer}>
            <View style={styles.stack}>
              <Text style={styles.main}>{lunchName}</Text>
              <HeartIcon />
            </View>
            <Text style={styles.subText}>By Hunzala Mushtaq</Text>

            <Text style={[styles.main, styles.desc]}>Description</Text>

            <Text style={styles.subText}>
              Pancakes are some people's favorite breakfast, who doesn't like
              pancakes? Especially with the real honey splash on top of the
              pancakes, of course everyone loves that! besides being Read
              More...
            </Text>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default DetailedLunch;

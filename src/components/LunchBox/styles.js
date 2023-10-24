import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  centeredRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainIcon: {
    padding: 20,
    backgroundColor: "#92A3FD",
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textMain: {
    marginLeft: 10,
  },
  headingMain: {
    fontWeight: "500",
    fontSize: 17,
    marginBottom: 2,
  },
  subHeading: {
    fontWeight: "400",
    fontSize: 15,
    color: "#7B6F72",
  },
  checkbox: {
    borderRadius: 20,
  },
});

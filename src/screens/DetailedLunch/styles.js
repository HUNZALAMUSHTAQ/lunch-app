import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    // alignItems: "center",
    margin: 20,
  },
  stack: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  main: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
  },
  subText: {
    color: "#7B6F72",
    fontSize: 12,
  },
  desc: {
    marginVertical: 15 
  }
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  clock: { alignItems: "flex-end" },
  weather_label: { alignSelf: "flex-end", transform: [{ rotate: "-90deg" }] },
  temperature_box: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  temperature_value: { fontSize: 150 },
  weather_image: { width: 90, height: 90, backgroundColor: "white" },
});

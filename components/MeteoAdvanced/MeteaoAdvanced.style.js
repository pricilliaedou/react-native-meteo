import { StyleSheet, View } from "react-native";
import Txt from "../Txt/Txt";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000050",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    borderColor: "white",
    borderWidth: 2,
  },
});

export function StyledLabel({ children }) {
  return <Txt style={{ fontSize: 15 }}>{children}</Txt>;
}

export function StyledValue({ children }) {
  return <Txt style={{ fontSize: 20 }}>{children}</Txt>;
}

export function StyledItem({ children }) {
  return <View style={{ alignItems: "center" }}>{children}</View>;
}

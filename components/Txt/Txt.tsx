import { ReactNode } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { styles } from "./Txt.style";

interface TxtProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export default function Txt({ children, style }: TxtProps) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

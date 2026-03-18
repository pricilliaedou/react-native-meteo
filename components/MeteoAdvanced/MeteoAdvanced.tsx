import { View } from "react-native";
import {
  StyledItem,
  StyledLabel,
  StyledValue,
  styles,
} from "./MeteaoAdvanced.style";

interface MeteoAdvancedProps {
  dusk: number;
  dawn: number;
  wind: number;
}

export default function MeteoAdvanced({
  dusk,
  dawn,
  wind,
}: MeteoAdvancedProps) {
  return (
    <View style={styles.container}>
      <StyledItem>
        <StyledValue>{dusk}</StyledValue>
        <StyledLabel>Aube</StyledLabel>
      </StyledItem>
      <StyledItem>
        <StyledValue>{dawn}</StyledValue>
        <StyledLabel>Crépuscule</StyledLabel>
      </StyledItem>
      <StyledItem>
        <StyledValue>{wind} km/h</StyledValue>
        <StyledLabel>Vent</StyledLabel>
      </StyledItem>
    </View>
  );
}

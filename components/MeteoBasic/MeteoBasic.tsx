import { Image, View } from "react-native";
import Txt from "../Txt/Txt";
import { styles } from "./MeteoBasic.style";

interface MeteoBasicProps {
  city?: string;
  label?: string;
  temperature?: number;
  weather_image?: string;
}

export default function MeteoBasic({
  city,
  label,
  temperature,
  weather_image,
}: MeteoBasicProps) {
  return (
    <>
      <View style={styles.clock}>
        <Txt>Clock</Txt>
      </View>

      <Txt>City</Txt>

      <Txt style={styles.weather_label}>Label</Txt>

      <View style={styles.temperature_box}>
        <Txt style={styles.temperature_value}>{temperature}° </Txt>
        <Image style={styles.weather_image} />
      </View>
    </>
  );
}

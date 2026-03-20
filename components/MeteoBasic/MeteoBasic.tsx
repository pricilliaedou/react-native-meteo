import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from "react-native";
import Clock from "../Clock/Clock";
import Txt from "../Txt/Txt";
import { styles } from "./MeteoBasic.style";

interface MeteoBasicProps {
  city?: string;
  label?: string;
  temperature?: number;
  weather_image?: ImageSourcePropType;
  onPress?: () => void;
}

export default function MeteoBasic({
  city,
  label,
  temperature,
  weather_image,
  onPress,
}: MeteoBasicProps) {
  return (
    <>
      <View style={styles.clock}>
        <Clock />
      </View>

      <Txt>{city}</Txt>

      <Txt style={styles.weather_label}>{label}</Txt>

      <View style={styles.temperature_box}>
        <TouchableOpacity onPress={onPress}>
          <Txt style={styles.temperature_value}>{temperature}° </Txt>
        </TouchableOpacity>
        <Image style={styles.weather_image} source={weather_image} />
      </View>
    </>
  );
}

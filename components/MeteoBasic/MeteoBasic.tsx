import { Image, View } from "react-native";
import Txt from "../Txt/Txt";
import { styles } from "./MeteoBasic.style";

export default function MeteoBasic() {
  return (
    <>
      <View style={styles.clock}>
        <Txt>Clock</Txt>
      </View>

      <Txt>City</Txt>

      <Txt style={styles.weather_label}>Label</Txt>

      <View style={styles.temperature_box}>
        <Txt style={styles.temperature_value}>3°</Txt>
        <Image style={styles.weather_image} />
      </View>
    </>
  );
}

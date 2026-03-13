import { nowToHHMM } from "@/services/date-service";
import Txt from "../Txt/Txt";
import { styles } from "./Clock.style";

export default function Clock() {
  return <Txt style={styles.time}>{nowToHHMM()}</Txt>;
}

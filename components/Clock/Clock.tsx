import { nowToHHMM } from "@/services/date-service";
import { useEffect, useState } from "react";
import Txt from "../Txt/Txt";
import { styles } from "./Clock.style";

export default function Clock() {
  const [time, setTime] = useState(nowToHHMM());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <Txt style={styles.time}>{nowToHHMM()}</Txt>;
}

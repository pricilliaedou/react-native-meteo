import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [coords, setCoords] = useState<null | {
    lat: number;
    lon: number;
  }>(null);

  useEffect(() => {
    getUsercoords();
  }, []);

  async function getUsercoords() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    } else {
      setCoords({ lat: 48.8566, lon: 2.3522 });
    }
  }

  console.log(coords);

  return (
    <>
      <View style={styles.meteo_basic}>
        <Text> </Text>
      </View>
      <View style={styles.meteo_searchbar}>
        <Text> </Text>
      </View>
      <View style={styles.meteo_advanced}>
        <Text> </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  meteo_basic: {
    flex: 2,
  },
  meteo_searchbar: {
    flex: 2,
  },
  meteo_advanced: {
    flex: 1,
  },
});

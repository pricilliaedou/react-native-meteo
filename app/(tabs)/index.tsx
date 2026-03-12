import { MeteoAPI } from "@/api/meteo";
import Txt from "@/components/Txt/Txt";
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
  const [weather, setWeather] = useState<null | any>(null);

  useEffect(() => {
    getUsercoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
    }
  }, [coords]);

  async function getUsercoords() {
    try {
      let { status } = await requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await getCurrentPositionAsync();
        console.log("location", location);
        setCoords({
          lat: location.coords.latitude,
          lon: location.coords.longitude,
        });
      }
    } catch (error) {
      console.log("error", error);
      setCoords({ lat: 48.9562, lon: 2.8885 });
    }
  }

  console.log(coords);

  async function fetchWeather(coordinates: { lat: number; lon: number }) {
    const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
    setWeather(weatherResponse);
  }

  console.log(weather);

  return (
    <>
      <View style={styles.meteo_basic}>
        <Txt style={{ fontSize: 60 }}>Hello World</Txt>
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

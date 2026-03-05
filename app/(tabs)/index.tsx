import { MeteoAPI } from "@/api/meteo";
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
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    } else {
      setCoords({ lat: 48.8575, lon: 2.3514 });
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

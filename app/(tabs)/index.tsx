import { MeteoAPI } from "@/api/meteo";
import MeteoBasic from "@/components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "@/services/meteo-service";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [coords, setCoords] = useState<null | {
    lat: number;
    lon: number;
  }>(null);
  const [weather, setWeather] = useState<null | any>(null);
  const [city, setCity] = useState<string>();

  const currentWeather = weather?.current_weather;

  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
      fetchCity(coords);
    }
  }, [coords]);

  async function getUserCoords() {
    try {
      let { status } = await requestForegroundPermissionsAsync();
      if (status === "granted") {
        const location = await getCurrentPositionAsync();
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

  async function fetchCity(coordinates: { lat: number; lon: number }) {
    const cityResponse = await MeteoAPI.fetchCityFromCoords(coordinates);
    console.log("cityResponse", cityResponse);
    setCity(cityResponse);
  }

  // console.log(weather);

  return currentWeather ? (
    <>
      <View style={styles.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city={city}
          label={getWeatherInterpretation(currentWeather?.weathercode)?.label}
          weather_image={
            getWeatherInterpretation(currentWeather?.weathercode)
              ?.image as ImageSourcePropType
          }
        />
      </View>
      <View style={styles.meteo_searchbar}>
        <Text> </Text>
      </View>
      <View style={styles.meteo_advanced}>
        <Text> </Text>
      </View>
    </>
  ) : null;
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

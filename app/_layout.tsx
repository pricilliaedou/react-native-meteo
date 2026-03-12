import { styles } from "@/App.style";
import backgroundImage from "@/assets/images/background.png";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ImageBackground } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const [isFontsLoaded] = useFonts({
    "Alata-Regular": require("@/assets/fonts/Alata-Regular.ttf"),
  });

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      imageStyle={styles.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {isFontsLoaded ? (
            <Stack
              screenOptions={{
                contentStyle: { backgroundColor: "transparent" },
              }}
            >
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
          ) : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

import { styles } from "@/App.style";
import backgroundImage from "@/assets/images/background.png";
import { Stack } from "expo-router";
import { ImageBackground } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Stack
            screenOptions={{ contentStyle: { backgroundColor: "transparent" } }}
          >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

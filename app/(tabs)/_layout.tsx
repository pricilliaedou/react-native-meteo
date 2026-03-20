import { Tabs } from "expo-router";
import React from "react";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: "transparent" },
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0, // enlève la ligne du haut
          elevation: 0, // Android: enlève l’ombre
          shadowOpacity: 0, // iOS: enlève l’ombre
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="forecast"
        options={{
          title: "Prévision",
        }}
      />
    </Tabs>
  );
}

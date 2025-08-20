import { Colors } from "@/utils/Colors";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        animation: "fade_from_bottom", // valid animation type
        animationDuration: 300, // duration in milliseconds
        contentStyle: { backgroundColor: Colors.mainBg }, // fixes white flash
        headerStyle: {
          backgroundColor: Colors.mainBg,
        },
        headerTintColor: Colors.textPrimary,
      }}
    >
      <Stack.Screen
        name="Password"
        options={{
          headerTitle: "Password",
        }}
      />
    </Stack>
  );
}
